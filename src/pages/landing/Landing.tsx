import React from "react";
import Main from "../../layouts/main/Main";
import "./landing.css";
import ProjectSection from "../../components/project-section/ProjectsSection";

const Landing: React.FC = () => {
  return (
    <div className="landing-container">
      <Main/>
      <ProjectSection/>
    </div>
  )
}

export default Landing;