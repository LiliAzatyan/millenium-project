import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import "./nav-bar.css";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo" id="specific-logo">MyLogo</div>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <FaTimes className="menu-icon" /> // Հենց համբուրգերը բացվի՝ X icon
        ) : (
          <FaBars className="menu-icon" /> // Եթե փակ է, ապա hamburger icon
        )}
      </button>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <a href="#home" className="nav-link">
          Մեր մասին
        </a>
        <a href="#features" className="nav-link">
          Ծառայություններ
        </a>
        <a href="#contact" className="nav-link">
          Շինարարական գործընթաց
        </a>
        <div 
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
          onMouseLeave={() => setIsDropdownOpen(false)} /* Dropdown-ը փակում ենք, երբ մկնիկը դուրս է գալիս */
        >
          <button 
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Ավարտած նախագծեր
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/project1" className="dropdown-item">
                Նախագիծ 1
              </a>
              <a href="/project2" className="dropdown-item">
                Նախագիծ 2
              </a>
              <a href="/project3" className="dropdown-item">
                Նախագիծ 3
              </a>
            </div>
          )}
        </div>
        <a href="tel:098" className="nav-link">
          <FaPhoneAlt className="icon-inline" /> Դիմել մեզ
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
