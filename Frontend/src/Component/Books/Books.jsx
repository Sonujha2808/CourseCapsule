import React, { useState } from 'react';
import './Books.css';
import Django from '../photo/Django_Book.png';
import DjangoBook from '../Docu/DjangoBook.pdf';
import Cpp from '../photo/Cpp_Book.png';
import CppBook from '../Docu/CppBook.pdf';
import Cyber from '../photo/CyberEthics_Book.png';
import CyberBook from '../Docu/CyberEthicsBook.pdf';
import HumanValues from '../photo/HumanValues_Book.png';
import HumanValuesBook from '../Docu/HumanValuesBook.pdf';

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPdf, setCurrentPdf] = useState(null);

    const books = [
        {
            image: Django,
            title: "Django- The Easy Way",
            author: "Samuli Natri",
            date: "December 8, 2021",
            downloadUrl: DjangoBook,
            viewUrl: DjangoBook
        },
        {
            image: Cpp,
            title: "Object-Oriented Programming C++",
            author: "Hari Mohan Pandey",
            date: "January 5, 2022",
            downloadUrl: CppBook,
            viewUrl: CppBook
        },
        {
            image: Cyber,
            title: "Cyber Ethics",
            author: "Pavan Duggal",
            date: "March 12, 2022",
            downloadUrl: CyberBook,
            viewUrl: CyberBook
        },
        {
            image: HumanValues,
            title: "Professional Ethics and Human Values",
            author: "R.S.Naagarazan",
            date: "February 19, 2022",
            downloadUrl: HumanValuesBook,
            viewUrl: HumanValuesBook
        },
        {
            image: "path/to/book-image5.jpg",
            title: "Node.js in Depth",
            author: "Emily Clark",
            date: "April 23, 2022",
            downloadUrl: "https://example.com/nodejs-in-depth",
            viewUrl: "https://example.com/nodejs-in-depth"
        }
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleViewClick = (viewUrl) => {
        setCurrentPdf(viewUrl);
    };

    const handleCloseViewer = () => {
        setCurrentPdf(null);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="app-container">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for a book title..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>

            <div className="book-list">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <div className="book-card" key={index}>
                            <img src={book.image} alt={book.title} className="book-image" />
                            <div className="book-content">
                                <h3 className="book-title">{book.title}</h3>
                                <p className="book-author">
                                    <span className="author-name">{book.author}</span> • <span className="publish-date">{book.date}</span>
                                </p>
                                <div className="button-container">
                                    <button
                                        className="download-button"
                                        onClick={() => window.open(book.downloadUrl, '_blank')}
                                    >
                                        Download
                                    </button>
                                    <button
                                        className="view-button"
                                        onClick={() => handleViewClick(book.viewUrl)}
                                    >
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No books found for "{searchTerm}"</p>
                )}
            </div>

            {currentPdf && (
                <div className="pdf-viewer-container">
                    <div className="pdf-viewer-header">
                        <button className="close-viewer" onClick={handleCloseViewer}>✕</button>
                    </div>
                    <iframe
                        src={currentPdf}
                        title="Book Viewer"
                        className="pdf-viewer"
                    />
                </div>
            )}
        </div>
    );
};

export default Books;
