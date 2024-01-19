import React,{useEffect} from 'react';
import Header from './component/header/header';
import Nav from './component/nav/nav';
import About from './component/about/about';
import Contact from './component/contact/contact';
import Experience from './component/experience/experience';
import Portfolio from './component/portfolio/portfolio';
import Services from './component/services/services';
//import Testimonials from './component/testimonials/testimonials';
import Footer from './component/footer/footer';
import Project from './component/projects/project';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import logo from '../src/assets/logo.png'
import './App.css'
import Home from './component/home/home';
// Import project details components
import NetflixProjectDetails from './component/netflix/NetflixCloneDescription';
import AmazoneProjectDetails from './component/amazone/AmazonCloneDescription';
import ForumProjectDetails from './component/forum/ForumDescription';

const App = () => {

   const navigate = useNavigate();

   useEffect(() => {
     // Scroll to the top when the route changes
     window.scrollTo(0, 0);
   }, [navigate]);
  return (
      
      <div className="app">
      
        
          
<div class='nav'>
  <Link to="/">
    <img class='logo' src={logo} alt={"Logo"} />
  </Link>

  <input type="checkbox" id="burger-menu" class="burger-menu">
  <label for="burger-menu">&#9776;</label>

  <div class="menu-items">
    <Link to="/Home"><button>Home</button></Link>
    <Link to="/project"><button>Projects</button></Link>
    <Link to="/about"><button>About</button></Link>
    <Link to="/experience"><button>Experience</button></Link>
    <Link to="/portfolio"><button>Portfolio</button></Link>
    <Link to="/services"><button>Services</button></Link>
    <Link to="/contact"><button>Contact Me</button></Link>
  </div>
</div>

                
        
        
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
}

export default App;
