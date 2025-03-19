import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layouts/header/Header";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Project1 from "./pages/projects/project_1/Project_1";
import Project2 from "./pages/projects/project_2/Project_2";
import Project3 from "./pages/projects/project_3/Project_3";
import { ROUTES } from "./constant/paths";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layouts/footer/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
        <Route path={ROUTES.PROJECT_1} element={<Project1 />} />
        <Route path={ROUTES.PROJECT_2} element={<Project2 />} />
        <Route path={ROUTES.PROJECT_3} element={<Project3 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
