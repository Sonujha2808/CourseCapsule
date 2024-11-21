import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Import QRCodeCanvas
import "./CourseInfo.css";

const courseDetails = {
  HTML: {
    price: "₹4,000",
    duration: "2 weeks",
    project: "Build a personal portfolio",
    skills: ["HTML5", "Semantic HTML", "Web Accessibility"],
    prerequisites: "Basic computer literacy",
    description: "Learn the fundamentals of HTML, the backbone of web development. This course covers everything from basic tags to advanced semantic HTML."
  },
  CSS: {
    price: "₹5,000",
    duration: "3 weeks",
    project: "Responsive website design",
    skills: ["CSS3", "Flexbox", "Grid"],
    prerequisites: "Knowledge of HTML",
    description: "Master CSS to style web pages beautifully. This course includes hands-on projects to create responsive designs using Flexbox and Grid."
  },
  C : {
    price: "₹3,500",
    duration: "4 weeks",
    project: "Simple text-based games",
    skills: ["C Syntax", "Control Structures", "Functions", "Pointers"],
    prerequisites: "Basic programming knowledge",
    description: "Dive into C programming, a powerful language that forms the foundation for many modern languages. Learn about data types, control structures, and memory management."
  },
  Cpp: {
    price: "₹4,500",
    duration: "4 weeks",
    project: "Mini software application",
    skills: ["OOP Concepts", "Data Structures", "Standard Template Library (STL)"],
    prerequisites: "Familiarity with C",
    description: "Explore the world of C++ and object-oriented programming. This course emphasizes practical application through projects, including data structures and algorithms."
  },
  JAVA: {
    price: "₹6,000",
    duration: "5 weeks",
    project: "Build a Java-based application",
    skills: ["Java Basics", "OOP", "Java Libraries"],
    prerequisites: "Basic programming knowledge",
    description: "Learn Java, a versatile language used for building Android apps, server-side applications, and more. This course covers the basics and advanced features of Java programming."
  },
  JavaScript: {
    price: "₹5,500",
    duration: "3 weeks",
    project: "Interactive web applications",
    skills: ["ES6", "DOM Manipulation", "AJAX"],
    prerequisites: "Knowledge of HTML and CSS",
    description: "Become proficient in JavaScript, the language of the web. This course includes practical exercises for building interactive web applications using modern JavaScript."
  },
  PHP: {
    price: "₹4,000",
    duration: "4 weeks",
    project: "Dynamic website with a database",
    skills: ["PHP Syntax", "MySQL", "CRUD Operations"],
    prerequisites: "Basic understanding of HTML",
    description: "Learn PHP, the server-side scripting language used to create dynamic web content. This course includes database interaction and building a complete web application."
  },
  PYTHON: {
    price: "₹5,500",
    duration: "4 weeks",
    project: "Data analysis project",
    skills: ["Python Basics", "Data Structures", "Libraries like Pandas and NumPy"],
    prerequisites: "Basic understanding of programming concepts",
    description: "Dive into Python, a versatile and popular programming language. This course covers everything from basic syntax to advanced topics such as data manipulation and analysis with popular libraries."
  }
  // ...other courses
};

const CourseInfo = () => {
  const { title } = useParams();
  const course = courseDetails[title];
  const navigate = useNavigate();
  const [paymentCode, setPaymentCode] = useState(null); // State for payment code

  if (!course) {
    return <div>Course not found</div>;
  }

  const handlePayNow = () => {
    // Generate a unique payment code
    const code = `${title}-${Math.random().toString(36).substr(2, 9)}`;
    setPaymentCode(`Payment Code: ${code} | Amount: ${course.price}`);
  };

  const closeModal = () => {
    setPaymentCode(null);
  };

  return (
    <div className="course-info">
      <h1>{title} Course Details</h1>
      <p><strong>Price:</strong> {course.price}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Project:</strong> {course.project}</p>
      <p><strong>Skills to Gain:</strong> {course.skills.join(", ")}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
      <p><strong>Description:</strong> {course.description}</p>
      
      <div className="button-group">
        <button onClick={() => navigate("/courses")} className="back-button">
          Back to Courses
        </button>
        {/* Button to generate a QR code for payment code */}
        <button onClick={handlePayNow} className="payment-button">
          Pay Now
        </button>
      </div>

      {/* Modal for displaying QR code */}
      {paymentCode && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">✕</button>
            <h3>{paymentCode}</h3>
            <QRCodeCanvas value={paymentCode} size={256} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseInfo;
