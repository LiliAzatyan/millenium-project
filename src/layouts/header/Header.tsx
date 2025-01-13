import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import NavBar from "../../components/nav-bar/NavBar";
import React from "react";
import "./header.css";

const Header: React.FC = () => {

  return (
        <>
      <header className="header">
        <div className="top-bar">
          <div className="left-panel"></div>
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <a href="mailto:someone@example.com" className="link">
                someone@example.com
              </a>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <a href="tel:+0987654321" className="link">
                +37477777
              </a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <a href="https://www.google.com/maps?q=40.222434,44.491180" target="_blank" className="link">Դավթաշեն</a>
            </div>

            {/* Social Networks text */}
            

            {/* Facebook և Instagram icon-ները */}
            <div className="info-item social-icons">
              <a href="https://www.facebook.com/StatusHouses" className="link" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://www.instagram.com/canyon26832" className="link" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <NavBar />
    </>
  );
};

export default Header;
