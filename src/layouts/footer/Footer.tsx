import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Միլլենիում Գրուպ</h2>
          <p>Մենք կառուցում ենք ապագան 🏡</p>
        </div>

        <div className="footer-menu">
          <h3>Հիմնական</h3>
          <a href="/">Գլխավոր</a>
          <a href="/about">Մեր Մասին</a>
          <a href="/services">Ծառայություններ</a>
          <a href="/contact">Կապ մեզ հետ</a>
        </div>

        <div className="footer-contact">
          <h3>Կապ մեզ հետ</h3>
          <p>📍 Հասցե: Երևան, Դավթաշեն համայնք</p>
          <p>📞 Հեռ․: <a href="tel:+37412345678">+374 12 34 56 78</a></p>
          <p>✉️ Էլ․ փոստ: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>

        <div className="footer-socials">
          <h3>Սոցիալական հարթակներ</h3>
          <a href="https://www.facebook.com/statushouses.erevan" target="_blank" rel="noopener noreferrer">
            🌐 Facebook
          </a>
          <a href="https://www.facebook.com/statushouses.erevan" target="_blank" rel="noopener noreferrer">
            📸 Instagram
          </a>
          <a href="https://wa.me/37412345678" target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </a>
          <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
            📱 Telegram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Միլլենիում Գրուպ | Բոլոր իրավունքները պաշտպանված են</p>
      </div>
    </footer>
  );
};

export default Footer;
