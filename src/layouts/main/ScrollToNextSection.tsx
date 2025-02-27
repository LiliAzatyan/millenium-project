import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./main.css";

const ScrollToNextSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setIsVisible(window.scrollY < 50); // Hide when scrolled down more than 50px
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-down" onClick={scrollDown}>
          <FaChevronDown />
        </div>
      )}
    </div>
  );
};

export default ScrollToNextSection;
