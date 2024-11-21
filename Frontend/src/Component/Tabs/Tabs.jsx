import React, { useState } from "react";
import "./Tabs.css";
import { Link, useNavigate } from "react-router-dom";

const Tabs = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const semesters = [
    { label: "Semester-1", path: "/One" },
    { label: "Semester-2", path: "/Two" },
    { label: "Semester-3", path: "/Three" },
    { label: "Semester-4", path: "/Four" },
    { label: "Semester-5", path: "/Five" },
    { label: "Semester-6", path: "/Six" },
  ];

  const handleItemClick = (path) => {
    navigate(path); // Navigate to the route based on the selected semester
    setDropdownOpen(false); // Close the dropdown after clicking
  };

  return (
    <div className="tabs">
      <Link to="/Courses">
        <button>Courses</button>
      </Link>
      <Link to="/Syllabus">
        <button>Syllabus</button>
      </Link>
      <div className="dropdown">
        <button onClick={toggleDropdown}>PYQ</button>
        {dropdownOpen && (
          <ul>
            {semesters.map((semester, index) => (
              <li key={index} onClick={() => handleItemClick(semester.path)}>
                {semester.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link to="/Notes">
        <button>Notes</button>
      </Link>
      <Link to="/Books">
        <button>E-books</button>
      </Link>
      <Link to="/Chat">
        <button>Chat</button>
      </Link>
    </div>
  );
};

export default Tabs;
