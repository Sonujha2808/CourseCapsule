import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/AuthContext'; // Adjust based on the actual path
import logo from "../photo/logo.png";
import "./Navbar.css"; // Combine Navbar and Home styles here
import { ReactTyped } from 'react-typed';

const Navbar = ({ notesCount }) => {
  const { user, logoutTheUser } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [image, setImage] = useState(null);

  const storageKey = user?.id ? `profileImage_${user.id}` : "defaultProfileImage";

  // Handle logout
  const handleLogout = () => {
    logoutTheUser(); // Clear user data
    alert("Logout successful");
  };

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent dropdown from closing when interacting inside it
    setDropdownVisible((prev) => !prev);
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setImage(imageUrl); // Set uploaded image

        // Save image URL to localStorage
        localStorage.setItem(storageKey, imageUrl);
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  // Load image from localStorage on mount
  useEffect(() => {
    const storedImage = localStorage.getItem(storageKey);
    if (storedImage) {
      setImage(storedImage);
    }

    // Close dropdown when clicking outside
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".profile-container")) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [storageKey]);

  return (
    <>
      <nav className="nav">
        <div className="brand">
          <img src={logo} alt="CourseCapsule" className="logo" />
          <h1 className="name">CourseCapsule</h1>
        </div>
        <div className="nav-links">
          {/* Profile Dropdown */}
          <div className="profile-container">
            <input
              type="file"
              id="upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="profile-image"
                onClick={() => document.getElementById("upload").click()}
              />
            ) : (
              <label htmlFor="upload" className="camera-button">
                📷
              </label>
            )}

            <button className="profile-button" onClick={toggleDropdown}>
              Profile
            </button>

            {/* Conditionally add 'show' class to display the dropdown */}
            <div
              className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the dropdown
            >
              <h4>Welcome, {user?.name || "Guest"}</h4>
              <a href="/login" onClick={handleLogout}>
                <button>Logout</button>
              </a>
              <p>Notes Count: {notesCount}</p>
              <p onClick={() => alert("Profile clicked")}>Profile</p>
              <p onClick={() => alert("Download Counts clicked")}>
                Download Counts
              </p>
              <p onClick={() => alert("Course Purchase clicked")}>
                Course Purchase
              </p>
            </div>
          </div>
        </div>
      </nav>
      <div className="typed">
        <ReactTyped
          strings={[
            "Specially For the GGSIPU BCA Students",
            "Welcome to CourseCapsule",
            "Providing Resources for Academic Success",
            "Your Ultimate Academic Companion",
            "Enhancing Your Learning Experience",
          ]}
          typeSpeed={50}
          backSpeed={70}
          loop
        />
      </div>
    </>
  );
};

export default Navbar;
