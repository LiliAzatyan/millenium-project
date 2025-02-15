import React, { useState } from "react";
import "./main.css";
import "../../App.css";
import "./landing1.png";
import "./landing2.png";
import ScrollToNextSection from "./ScrollToNextSection";

const images = [
  "./landing1.png",
  "./landing2.png",
];

const Main: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="landing-container">
      <div className="landing-text">
        <h1>
          <strong>Ձեր երազանքների տունը</strong> կառուցեք մեզ հետ
        </h1>
        <p>
          Մենք առաջարկում ենք <strong>բարձրորակ շինարարական լուծումներ</strong>, որոնք համապատասխանում են ձեր պատկերացումներին և պահանջներին։
        </p>
      </div>
      <div className="landing-image-container">
        <img
          src={images[currentImageIndex]}
          alt="Landing"
          className={`landing-image`}
        />
        <div className="image-controls">
          <button onClick={handlePrevImage}>Նախորդ</button>
          <button onClick={handleNextImage}>Հաջորդ</button>
        </div>
      </div>
      <ScrollToNextSection/>
    </div>
  );
};

export default Main;