import React from 'react';
import { FaReact } from 'react-icons/fa';
import './experience.css';

const frontEndSkills = [
  { name: 'HTML5', icon: <FaReact className="skill-icon" /> },
  { name: 'CSS3', icon: <FaReact className="skill-icon" /> },
  { name: 'JavaScript', icon: <FaReact className="skill-icon" /> },
  { name: 'React', icon: <FaReact className="skill-icon" /> },
  { name: 'Redux', icon: <FaReact className="skill-icon" /> },
  { name: 'Vue.js', icon: <FaReact className="skill-icon" /> },
  { name: 'jQuery', icon: <FaReact className="skill-icon" /> },
  { name: 'Bootstrap', icon: <FaReact className="skill-icon" /> },
];

const backEndSkills = [
  { name: 'Node.js', icon: <FaReact className="skill-icon" /> },
  { name: 'Express', icon: <FaReact className="skill-icon" /> },
  { name: 'Python', icon: <FaReact className="skill-icon" /> },
  { name: 'Django', icon: <FaReact className="skill-icon" /> },
  { name: 'Flask', icon: <FaReact className="skill-icon" /> },
  { name: 'PHP', icon: <FaReact className="skill-icon" /> },
  //{ name: 'Laravel', icon: <FaReact className="skill-icon" /> },
  { name: 'MySQL', icon: <FaReact className="skill-icon" /> },
  { name: 'MongoDB', icon: <FaReact className="skill-icon" /> },
];

const Experience = () => {
  return (
    <div id='experience' className="experience-container">
      <div className="front-end-container">
        <h2 className="container-header">Front-End Skills</h2>
        <ul className="skill-list">
          {frontEndSkills.map((skill) => (
            <li key={skill.name}>
              <div className="skill-icon-container">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="back-end-container">
        <h2 className="container-header">Back-End Skills</h2>
        <ul className="skill-list">
          {backEndSkills.map((skill) => (
            <li key={skill.name}>
              <div className="skill-icon-container">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;