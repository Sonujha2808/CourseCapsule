const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error creating user' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log(`Login attempt for email: ${email}`);

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user, status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Shareable link creation
router.post('/api/share', (req, res) => {
    const { pdfUrl } = req.body;

    try {
        // Create a JWT for the shareable link
        const token = jwt.sign({ pdfUrl }, process.env.JWT_SECRET, { expiresIn: '1d' });

        const shareableLink = `http://localhost:3000/shared/${token}`;
        res.json({ shareableLink });
    } catch (error) {
        console.error('Error generating shareable link:', error);
        res.status(500).json({ error: 'Error generating shareable link' });
    }
});

// Accessing shared links
router.get('/shared/:token', async (req, res) => {
    const { token } = req.params;

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Simulated check for user authentication
        const isAuthenticated = req.headers.authorization || false; // Adjust logic to match your authentication strategy
        if (!isAuthenticated) {
            return res.redirect('/login'); // Redirect to login page if not authenticated
        }

        // If authenticated, redirect to the actual PDF URL
        res.redirect(decoded.pdfUrl);
    } catch (error) {
        console.error('Error accessing shared link:', error);
        res.status(401).send("Unauthorized access");
    }
});

module.exports = router;
