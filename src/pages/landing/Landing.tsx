import React from "react";
import Main from "../../layouts/main/Main";
import ProductSection from "../../components/project-section/projects-section/ProjectsSection";
import "./landing.css";

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <Main/>
      <ProductSection/>
    </div>
  )
}

export default Landing;