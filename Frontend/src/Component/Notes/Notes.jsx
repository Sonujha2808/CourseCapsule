import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notes.css';

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [notesData, setNotesData] = useState([]);

  // Fetch notes from the API when the component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notes');
        setNotesData(response.data); // Set the fetched notes
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notesData.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUploadSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const subjectInput = e.target.elements[0].value;
    const descriptionInput = e.target.elements[1].value;
    const emailInput = e.target.elements[2].value;
    const fileInput = e.target.elements[3];

    formData.append('pdf', fileInput.files[0]);
    formData.append('title', subjectInput);
    formData.append('description', descriptionInput);
    formData.append('email', emailInput);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert("Thank you! Your note has been submitted.");
      setShowUploadForm(false);

      // Add the new note to the current notes state
      const newNote = {
        title: subjectInput,
        description: descriptionInput,
        pdfUrl: response.data.filePath,
      };
      setNotesData(prevNotes => [...prevNotes, newNote]);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("There was an error uploading your file.");
    }
  };

  const handleViewClick = (pdfUrl) => {
    const absolutePdfUrl = `http://localhost:5000${pdfUrl}`;
    setCurrentPdf(absolutePdfUrl);
    setShowViewModal(true);
  };

  const handleShareClick = async (pdfUrl) => {
    try {
      const response = await axios.post('http://localhost:5000/api/share', { pdfUrl });
      navigator.clipboard.writeText(response.data.shareableLink);
      alert("Shareable link copied to clipboard!");
    } catch (error) {
      console.error("Error generating shareable link:", error);
      alert("Failed to generate a shareable link.");
    }
  };

  const handleCloseModal = () => {
    setShowViewModal(false);
    setCurrentPdf(null);
  };

  return (
    <div className="notes-wrapper">
      <div className="search-upload-container">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="upload-button" onClick={() => setShowUploadForm(true)}>
          Upload Note
        </button>
      </div>

      <div className="notes-container">
        {filteredNotes.map((note, index) => (
          <div key={index} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <div className="button-container">
              <button
                className="view-button"
                onClick={() => handleViewClick(note.pdfUrl)}
              >
                View
              </button>
              <a
                href={`http://localhost:5000${note.pdfUrl}`}
                className="download-button"
                download
              >
                Download
              </a>
              <button
                className="share-button"
                onClick={() => handleShareClick(note.pdfUrl)}
              >
                Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {showViewModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="pdf-viewer" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={handleCloseModal}>✕</button>
            <iframe
              src={currentPdf}
              width="100%"
              height="100%"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}

      {showUploadForm && (
        <div className="modal-overlay">
          <div className="upload-form">
            <h2>Upload Your Note</h2>
            <form onSubmit={handleUploadSubmit}>
              <label>
                Subject:
                <input type="text" required />
              </label>
              <label>
                Description:
                <textarea required></textarea>
              </label>
              <label>
                Email:
                <input type="email" required />
              </label>
              <label>
                Upload PDF:
                <input type="file" accept=".pdf" required />
              </label>
              <button type="submit" className="submit-button">Submit</button>
              <button type="button" onClick={() => setShowUploadForm(false)} className="cancel-button">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
