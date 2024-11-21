import React from "react";
import { Link } from "react-router-dom";
import html from "../photo/html.png";
import Css from "../photo/Css.png";
import c from "../photo/c.png";
import cpp from "../photo/cpp.png";
import js from "../photo/js.png";
import java from "../photo/java.png";
import Python from "../photo/Python.png";
import Php from "../photo/Php.png";
import logo from "../photo/logo.png";
import "./All.css";

const data = [
  {
    image: html,
    title: "HTML",
    content: "HTML is the standard markup language used to create web pages...",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    image: Css,
    title: "CSS",
    content: "CSS is a cornerstone technology used for describing the presentation...",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    image: c,
    title: "C",
    content: "The C programming language, developed in the early 1970s by Dennis Ritchie...",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    image: cpp,
    title: "Cpp",
    content: "C++ is a versatile and powerful programming language that combines the efficiency...",
    link: "https://isocpp.org/",
  },
  {
    image: js,
    title: "JavaScript",
    content: "JavaScript is a versatile, high-level programming language primarily used in web development...",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image: java,
    title: "JAVA",
    content: "Java is a versatile and powerful programming language widely used for developing a range of applications...",
    link: "https://www.oracle.com/java/",
  },
  {
    image: Python,
    title: "PYTHON",
    content: "Python is a versatile and high-level programming language renowned for its simplicity and readability...",
    link: "https://www.python.org/",
  },
  {
    image: Php,
    title: "PHP",
    content: "PHP is a widely-used open-source server-side scripting language...",
    link: "https://www.php.net/",
  },
];

function All() {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-icon">
            🔗
          </a>
          <img
            src={item.image}
            alt={`${item.title} Image`}
            className="card-img"
          />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <div className="author">
              <img src={logo} alt="Author" />
              <span>By CourseCapsule</span>
            </div>
            <Link to={`/course-info/${item.title}`} className="buy-now-button">
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default All;
