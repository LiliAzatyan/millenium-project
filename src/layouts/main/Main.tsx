import React, { useState } from "react";
import "./main.css";
import "../../App.css";
import ScrollToNextSection from "./ScrollToNextSection";



const Main: React.FC = () => {

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
       
        <div className="image-controls">
        </div>
      </div>
      <ScrollToNextSection/>
    </div>
  );
};

export default Main;