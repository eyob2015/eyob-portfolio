import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import{AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div id='footer' className='footer-container'>
      
      <div className='logo-container'>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <div className='links-container'>
        <a href='#header' className='link'>Header</a>
        <a href='#about' className='link'>About</a>
        <a href='#experience' className='link'>Experience</a>
        <a href='#portfolio' className='link'>Portfolio</a>
        <a href='#services' className='link'>Services</a>
      </div>
      <div className='social-container'>
        
        <a href='https://github.com/eyob2015' target='_blank' rel='noreferrer'>
          <AiFillGithub className='social-icon' />
        </a>
        
        <a href='https://www.linkedin.com/in/eyob-sisay-35214020a/' target='_blank' rel='noreferrer'>
          <BsLinkedin className='social-icon' />
        </a>
     
      </div>
    </div>
  );
};

export default Footer;



