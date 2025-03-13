import React, { useState, useEffect } from "react";
import "./main.css";

const pictures = [
  require("./main-pictures/1.jpg"),
  require("./main-pictures/2.jpg"),
  require("./main-pictures/3.jpg"),
  require("./main-pictures/4.jpg"),
];

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isArrowHidden, setIsArrowHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = () => {
    setIsArrowHidden(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-container">
      <div className="landing-text-section">
        <h1>
          Քո <span style={{ color: "#E39B62", fontWeight: "bold" }}>երազանքների</span> տունը սպասում է քեզ
        </h1>
        <p>
          Մենք <span style={{ color: "#E39B62", fontWeight: "bold" }}>հաստատ գիտենք</span>, որ նոր տունը նշանակում է նոր հնարավորություններ։ Սկսեք ձեր նոր կյանքը{" "}
          <span style={{ color: "#E39B62", fontWeight: "bold" }}>մեզ հետ</span>, որտեղ երազանքները իրականություն են դառնում։
        </p>

        <div className="button-container">
          <a href="/services" className="button">Ծառայություններ</a>
          <a href="tel:+37412345678" className="button">Զանգեք մեզ</a>
        </div>
      </div>
      <div className="image-container">
        <img src={pictures[currentIndex]} alt="Slideshow" className="fade-image" />
      </div>
      <div
        className={`scroll-down-arrow ${isArrowHidden ? "hidden" : ""}`}
        onClick={handleArrowClick}
      >
        ↓
      </div>
    </div>
  );
};

export default Main;
