import React, { useState, useEffect } from "react";
import "./Slider.css";
import SampleVideo from "../photo/sample.mp4"; // Replace with your video path

const Slider = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add the blurred class when scrolling down past a threshold
      setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`hero ${isScrolled ? "blurred" : ""}`}>
      {/* Video Background */}
      <video className="background-video" src={SampleVideo} autoPlay loop muted></video>

      {/* Overlay Content */}
      <div className={`overlay ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="overlay-title">Welcome to CourseCapsule</h1>
        <p className="overlay-description">Your Ultimate Academic Companion</p>
      </div>
    </div>
  );
};

export default Slider;
