const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRoutes = require('./routes/auth');
const Note = require('./models/Note');
const User = require('./models/User');

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fetch notes route
app.get('/api/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ message: 'Error fetching notes' });
  }
});

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// File upload route
app.post('/upload', upload.single('pdf'), async (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');

  try {
    const { title, description, email } = req.body;

    const newNote = new Note({
      title,
      description,
      email,
      pdfUrl: `/uploads/${req.file.filename}`,
    });

    await newNote.save();

    // Send thank-you email after successful upload
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank You for Uploading: ${title}`,
      text: `Dear User,\n\nThank you for uploading the note titled "${title}".\n\nBest regards,\nCourseCapsule Team`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log('Email sent:', info.response);
    });

    res.status(200).json({
      message: 'File uploaded successfully',
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error('Error saving note:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route for user authentication
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Shareable link creation route
app.post('/api/share', (req, res) => {
  const { pdfUrl } = req.body;

  try {
    const token = jwt.sign({ pdfUrl }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const shareableLink = `http://localhost:3000/shared/${token}`;
    res.json({ shareableLink });
  } catch (error) {
    console.error('Error generating shareable link:', error);
    res.status(500).json({ message: 'Error generating link' });
  }
});

// Shared link access route
app.get('/shared/:token', async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.redirect(decoded.pdfUrl);
  } catch (error) {
    console.error('Shared link error:', error);
    res.status(401).send('Unauthorized access');
  }
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
