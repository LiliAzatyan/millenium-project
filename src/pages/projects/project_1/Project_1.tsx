// import ImageSlider from "../../../components/imageSlider/ImageSliderProps";
// import React from "react";
// import "./project_1.css";
// const img1 = require("./project1-pictures/project1-1.jpeg");
// const img2 = require("./project1-pictures/project1-2.jpeg");
// const img3 = require("./project1-pictures/project1-3.jpeg");

// const projectImages = [img1, img2, img3];


// const Project1: React.FC = () => {
//   return (
//     <div className="project-container">
//       <div className="project-content">
//         <div className="image-section">
//           <ImageSlider images={projectImages} />
//         </div>
//         <div className="text-section">
//           <h1>Ավարտված նախագիծ 1</h1>
//           <p>
//             Այս նախագիծը ընդգրկում է ժամանակակից լուծումներ, ապահովված է
//             բարձրակարգ շինանյութերով և համապատասխանում է միջազգային
//             ստանդարտներին:
//           </p>
//           <ul>
//             <li><strong>Տարածք:</strong> 120 մ²</li>
//             <li><strong>Սենյակներ:</strong> 4</li>
//             <li><strong>Գտնվելու վայրը:</strong> Երևան</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project1;



import ImageSlider from "../../../components/imageSlider/ImageSliderProps";
import React from "react";
import "./project_1.css";
const img1 = require("./project1-pictures/project1-1.jpeg");
const img2 = require("./project1-pictures/project1-2.jpeg");
const img3 = require("./project1-pictures/project1-3.jpeg");

const projectImages = [img1, img2, img3];

const Project1: React.FC = () => {
  return (
    <div className="project-container">
      <div className="project-content">
        <div className="image-section">
          <ImageSlider images={projectImages} />
        </div>
        <div className="text-section">
          <h1>Ավարտված նախագիծ 1</h1>
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

      {/* "Հավանեցիք՝ կապվեք մեզ հետ" Section */}
      <div className="cta-contact-section">
        <h2>Հավանեցիք մեր նախագիծը՝ կապվեք մեզ հետ!</h2>
        <p>Եթե ցանկանում եք ավելի շատ տեղեկություններ ստանալ կամ հարցումներ ուղարկել, խնդրում ենք կապվել մեզ հետ՝ օգտագործելով ստորև գտնվող կապի ձևը:</p>
        <button className="cta-button">Կապվեք մեզ հետ</button>
      </div>

      {/* Contact Form */}
      <div className="contact-section">
        <h2>Կապվեք մեզ հետ</h2>
        <form>
          <input type="text" placeholder="Ձեր անունը" />
          <input type="email" placeholder="Ձեր էլ. հասցեն" />
          <textarea placeholder="Ձեր հաղորդագրությունը"></textarea>
          <button type="submit">Ուղարկել</button>
        </form>
      </div>
    </div>
  );
};

export default Project1;
