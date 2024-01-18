import React from 'react';
import { FaCheck } from 'react-icons/fa';
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <div className="service">
          <div className="service-header">
            <h3>Front-End Development</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> Responsive web design</li>
            <li><FaCheck /> HTML/CSS/JavaScript development</li>
            <li><FaCheck /> React development</li>
            <li><FaCheck /> Cross-browser compatibility testing</li>
          </ul>
        </div>
        <div className="service">
          <div className="service-header">
            <h3>Back-End Development</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> Node.js/Express development</li>
            <li><FaCheck /> RESTful API development</li>
            <li><FaCheck /> Database design and management</li>
            <li><FaCheck /> Server configuration and deployment</li>
          </ul>
        </div>
        <div className="service">
          <div className="service-header">
            <h3>Full-Stack Development</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> Full-stack web application development</li>
            <li><FaCheck /> MERN stack development</li>
            <li><FaCheck /> Web application testing</li>
            <li><FaCheck /> Continuous integration and deployment</li>
          </ul>
        </div>
      </div>
      <div className="services-container">
        <div className="service">
          <div className="service-header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> User research and analysis</li>
            <li><FaCheck /> Wireframing and prototyping</li>
            <li><FaCheck /> Visual design and branding</li>
            <li><FaCheck /> Interaction design and usability testing</li>
          </ul>
        </div>

        
        <div className="service">
          <div className="service-header">
            <h3>Content Management Systems</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> WordPress development and customization</li>
            <li><FaCheck /> Wix Custemizaton</li>
            <li><FaCheck /> Square Space custemization</li>
            <li><FaCheck /> Shopify Custemization</li>
           
          </ul>
        </div>
   
          
       
        <div className="service">
          <div className="service-header">
            <h3>E-commerce Development</h3>
          </div>
          <ul className="service-list">
            <li><FaCheck /> Online store setup </li>
            <li><FaCheck /> Payment gateway integration</li>
            <li><FaCheck /> Product catalog </li>
            <li><FaCheck /> Order management and fulfillment</li>
          </ul>
        </div>
      </div>
   
    </section>
  );
};

export default Services;