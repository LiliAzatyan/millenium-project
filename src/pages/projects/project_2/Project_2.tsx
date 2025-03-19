import ImageSlider from "../../../components/imageSlider/ImageSliderProps";
import React from "react";
import "./project_2.css";
const img1 = require("./project2-pictures/project2-1.jpeg");
const img2 = require("./project2-pictures/project2-2.jpeg");
const img3 = require("./project2-pictures/project2-3.jpeg");

const projectImages = [img1, img2, img3];


const Project2: React.FC = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="image-section">
          <ImageSlider images={projectImages} />
        </div>
        <div className="text-section">
          <h1>Ավարտված նախագիծ 2</h1>
          <p>
            Այս նախագիծը ընդգրկում է ժամանակակից լուծումներ, ապահովված է
            բարձրակարգ շինանյութերով և համապատասխանում է միջազգային
            ստանդարտներին:
          </p>
          <ul>
            <li><strong>Տարածք:</strong> 120 մ²</li>
            <li><strong>Սենյակներ:</strong> 4</li>
            <li><strong>Գտնվելու վայրը:</strong> Երևան</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project2;
