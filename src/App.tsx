import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Header from "./layouts/header/Header";
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Services from './pages/services/Services';
import { ROUTES } from './constant/paths';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './layouts/footer/Footer';
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ROUTES.LANDING} element={<Landing />} /> 
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONTACT} element={<Contact/>} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.SERVICES} element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  )
};

export default App;
