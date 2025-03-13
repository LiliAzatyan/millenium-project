import React from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Կապվեք մեզ հետ</h1>
        <p>Մենք պատրաստ ենք օգնել ձեզ ցանկացած հարցում։</p>
      </div>

      <div className="contact-content">
        {/* Կոնտակտային ինֆո */}
        <div className="contact-info">
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Մեր հասցեն</h3>
            <p>Երևան, Ամիրյան 15</p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Հեռախոս</h3>
            <p><a href="tel:+37412345678">+374 12 345 678</a></p>
          </div>
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Էլ․ փոստ</h3>
            <p><a href="mailto:info@company.com">info@company.com</a></p>
          </div>
        </div>

        {/* Քարտեզ */}
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48848.39473602484!2d44.48812521587936!3d40.179186566693844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fba4844e8bcd%3A0x1a6ebcd2d7f43d0!2sYerevan!5e0!3m2!1sen!2sam!4v1710444444444"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Սոցիալական մեդիա */}
      <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
