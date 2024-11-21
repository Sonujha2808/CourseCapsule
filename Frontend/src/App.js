import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Slider from "./Component/Slider/Slider";
import Tab from "./Component/Tabs/Tabs";
import All from "./Component/Subjects/All";
import Syllabus from "./Component/Syllabus/Syllabus";
import Books from "./Component/Books/Books";
import Notes from "./Component/Notes/Notes";
import One from "./Component/PYQ/One";
import Two from "./Component/PYQ/Two";
import Three from "./Component/PYQ/Three";
import Four from "./Component/PYQ/Four";
import Five from "./Component/PYQ/Five";
import Six from "./Component/PYQ/Six";
import Footer from "./Component/Footer/Footer";
import Login from "./Component/Login/Login";
import Signup from './Component/Signup/Signup';
import Chat from './Component/Chat/Chat';

import CourseInfo from "./Component/CourseInfo/CourseInfo";
import { AuthProvider, useAuth } from './context/AuthContext';
import Chatbot from './Component/Chatbot/Chatbot'; // Import the Chatbot component

function App() {
    const { user } = useAuth();

    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    {user && (
                        <>
                            <Navbar />
                            <Slider />
                            <Tab />
                        </>
                    )}

                    <Routes>
                        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
                        <Route path="/" element={user ? <All /> : <Navigate to="/login" />} />
                        <Route path="/Courses" element={user ? <All /> : <Navigate to="/login" />} />
                        <Route path="/Syllabus" element={user ? <Syllabus /> : <Navigate to="/login" />} />
                        <Route path="/Books" element={user ? <Books /> : <Navigate to="/login" />} />
                        <Route path="/Notes" element={user ? <Notes /> : <Navigate to="/login" />} />
                        <Route path="/One" element={user ? <One /> : <Navigate to="/login" />} />
                        <Route path="/Two" element={user ? <Two /> : <Navigate to="/login" />} />
                        <Route path="/Three" element={user ? <Three /> : <Navigate to="/login" />} />
                        <Route path="/Four" element={user ? <Four /> : <Navigate to="/login" />} />
                        <Route path="/Five" element={user ? <Five /> : <Navigate to="/login" />} />
                        <Route path="/Six" element={user ? <Six /> : <Navigate to="/login" />} />
                        <Route path="/Chat" element={user ? <Chat /> : <Navigate to="/login" />} />
                        <Route path="/course-info/:title" element={user ? <CourseInfo /> : <Navigate to="/login" />} />
                    </Routes>

                    {user && <Footer />}
                    {user && <Chatbot />} {/* Render the Chatbot component */}
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
