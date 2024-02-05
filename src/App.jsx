import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import About from "./component/about/about";
import Contact from "./component/contact/contact";
import Experience from "./component/experience/experience";
import Portfolio from "./component/portfolio/portfolio";
import Services from "./component/services/services";
import Footer from "./component/footer/footer";
import Project from "./component/projects/project";
import Home from "./component/home/home";
import NetflixProjectDetails from "./component/netflix/NetflixCloneDescription";
import AmazoneProjectDetails from "./component/amazone/AmazonCloneDescription";
import ForumProjectDetails from "./component/forum/ForumDescription";
import logo from "../src/assets/logo.png";

import NavBar from "./component/nav/NavBar"; // Import the NavBar component
import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 768
  );

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  return (
    <div className="app">
      <NavBar
        logo={logo}
        isMobileOrTablet={isMobileOrTablet}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setBurgerMenuOpen={setBurgerMenuOpen}
        closeBurgerMenu={closeBurgerMenu}
        
      />

      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/" element={<Home />} />

        <Route path="/project/netflix" element={<NetflixProjectDetails />} />
        <Route path="/project/amazone" element={<AmazoneProjectDetails />} />
        <Route path="/project/forum" element={<ForumProjectDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
