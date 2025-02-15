import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./header.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">MyLogo</div>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </button>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <a href="#home" className="nav-link">Մեր մասին</a>
        <a href="#features" className="nav-link">Ծառայություններ</a>
        <a href="#contact" className="nav-link">Շինարարական գործընթաց</a>
        <div
          className={`dropdown ${isOpen ? "open" : ""}`}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            Ավարտած նախագծեր
          </button>
          {isOpen && (
            <div className="dropdown-menu">
              <a href="/project1" className="dropdown-item">Նախագիծ 1</a>
              <a href="/project2" className="dropdown-item">Նախագիծ 2</a>
              <a href="/project3" className="dropdown-item">Նախագիծ 3</a>
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

export default Header;
