import { FaChevronDown } from "react-icons/fa";
import React from "react";
import "./main.css"
const ScrollToNextSection: React.FC = () => {
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" }); // Սքրոլն առաջացնում է մեկ էկրան ներքև
  };

  return (
    <div>
      {/* Սլաքը ներքևից */}
      <div className="scroll-down" onClick={scrollDown}>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default ScrollToNextSection;
