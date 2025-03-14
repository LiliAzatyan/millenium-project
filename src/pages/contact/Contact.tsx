import React from "react";
import "./contact.css"; // Կապվող CSS ֆայլ

const ContactPicture = require("./contact-picture.jpeg");

const Contact = () => {
  return (
    <div className="contact-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Փոփափի կոնտեյներ */}
        <div className="contact-content">
          <h1>Հետադարձ Կապ</h1>
          <p>Խնդրում ենք կապ հաստատել մեզ հետ նշված եղանակներով:</p>

          <div className="contact-info">
            <div className="contact-item">
              <span role="img" aria-label="phone">📞</span>
              <p>Հեռախոսահամար: <a href="tel:+37412345678">+374 12 34 56 78</a></p>
            </div>
            <div className="contact-item">
              <span role="img" aria-label="email">📧</span>
              <p>Էլ․ փոստ: <a href="mailto:info@company.com">info@company.com</a></p>
            </div>
            <div className="contact-item">
              <span role="img" aria-label="location">📍</span>
              <p>Հասցե: Երևան, Արմենիա</p>
            </div>
            <div className="contact-item">
              <span role="img" aria-label="schedule">🕒</span>
              <p>Աշխատանքային ժամեր:</p>
              <ul className="work-hours">
                <li>Երկուշաբթի - շաբաթ: 9:00 - 18:00</li>
                <li>Կիրակի՝ ազատ</li>
              </ul>
            </div>
          </div>

          <div className="social-media">
            <h3>Հետևեք Մեզ</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Նկար */}
        <div className="contact-image">
          <img src={ContactPicture} alt="Contact" />
        </div>
      </div>

      {/* Քարտեզ */}
      <div className="map-container">
        <iframe
          title="Google Maps"
          width="100%"
          height="400"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.1461985484427!2d44.51840031559388!3d40.18026697938747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404abb2dfb7c51e9%3A0x40a3fc1b1a7e0184!2z0JrQsNC60LDRg9C60YbQsNCw0Y8!5e0!3m2!1sen!2sus!4v1651060796062!5m2!1sen!2sus"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
