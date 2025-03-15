import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const videoSrc = require("./video.mp4");

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="about-container"
    >
      {/* Video Section */}
      <div className="video-section">
        <video className="video-height" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mission Section */}
      <div className="content-section">
        <div className="section">
          <div className="text-container">
            <h2 className="section-title">Մեր նպատակը</h2>
            <p className="section-text">
              Մեր նպատակն է ապահովել ձեր հարմարավետությունը, բարեկեցությունը տան առումով՝ 
              ստեղծելով որակյալ և մոդեռն լուծումներ, որոնք համատեղում են 
              նորարարությունն ու հարմարավետությունը։
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="section">
          <div className="text-container">
            <h2 className="section-title">Մեր նախագծերը</h2>
            <p className="section-text">
              Մենք աշխատում ենք նորարարական և բարձրակարգ բնակելի և կոմերցիոն
              շինությունների նախագծերի վրա՝ օգտագործելով ժամանակակից տեխնոլոգիաներ։
            </p>
          </div>
        </div>

        {/* Clients Section */}
        <div className="section reverse">
          <div className="text-container">
            <h2 className="section-title">Հաճախորդների կարծիքներ</h2>
            <p className="section-text">
              Մեր հաճախորդները գնահատում են մեր աշխատանքի որակն ու պրոֆեսիոնալիզմը։
            </p>
          </div>
        </div>

        {/* Partners Section */}
        <div className="section">
          <div className="text-container">
            <h2 className="section-title">Մեր գործընկերները</h2>
            <p className="section-text">
              Մենք համագործակցում ենք առաջատար շինարարական ընկերությունների հետ,
              ապահովելով լավագույն որակի նյութեր և լուծումներ։
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
