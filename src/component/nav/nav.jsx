import React, { useState } from 'react';
import './nav.css';
import { FaHome, FaUser, FaEnvelope, FaSearch, FaBars, FaHeart } from 'react-icons/fa';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a href="#" className={activeLink === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>
        <FaHome /> Home
      </a>
      <a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>
        <FaUser /> About
      </a>
      <a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>
        <FaEnvelope /> Contact
        </a>
      <a href="#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => handleLinkClick('services')}>
        <FaSearch /> Services
      </a>
      <a href="#experience" className={activeLink === 'experience' ? 'active' : ''} onClick={() => handleLinkClick('experience')}>
        <FaBars /> Experiences
      </a>

      <a href="#footer" className={activeLink === 'footer' ? 'active' : ''} onClick={() => handleLinkClick('footer')}>
        <FaHeart /> Footer
      </a>
    </nav>
  )
};

export default Nav;