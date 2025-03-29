import { FaBars, FaPhoneAlt, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { ROUTES } from "../../constant/paths";
import "./Header.css";
import Logo from "./logo.svg";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
      <a href={ROUTES.LANDING} style={{ textDecoration: "none" }}>
      <img src={Logo} alt="Logo"  className="logo" />

      </a>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </button>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <a href={ROUTES.ABOUT} className="nav-link">Մեր մասին</a>
        <a href={ROUTES.SERVICES} className="nav-link">Ծառայություններ</a>
        <a href={ROUTES.CONTACT} className="nav-link">Կապ մեզ հետ</a>
        <div
          className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        >
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Ավարտած նախագծեր
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/project1" className="dropdown-item">Նախագիծ 1</a>
              <a href="/project2" className="dropdown-item">Նախագիծ 2</a>
              <a href="/project3" className="dropdown-item">Նախագիծ 3</a>
            </div>
          )}
        </div>
        <a href="tel:033400805" className="nav-link">
          <FaPhoneAlt className="icon-inline" /> Դիմել մեզ
        </a>
      </nav>
    </div>
  );
};

export default Header;


