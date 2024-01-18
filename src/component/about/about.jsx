import React from 'react';
import './about.css';
import me from '../../assets/meab.jpg'
import {MdWorkHistory} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import{GoProjectSymlink} from 'react-icons/go'


const About = () => {
  return (
    <section id="about" >
      <h2>Get To Know ME</h2>
      <h2>About Me</h2>
      <p></p>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image"> 
            <img src={me} alt="Placeholder" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h3>EXPERIENCE</h3>
              <h2>+1 years </h2>
              <MdWorkHistory className='about__icon'/>
            </article>
            <article className='about__card'>
              <h3>FREELANCER</h3>
              <h2>On up Work and Fiver</h2>
              <FiUsers className='about__icon'/>
            </article>
            <article className='about__card'>
              <h3>Projects Done</h3>
              <h2>+5</h2>
              <GoProjectSymlink className='about__icon'/>
            </article>
          </div>
          <p>Hello, I'm EYOB SISAY, a full stack app developer and software engineer. <br></br>
            I have over a year of experience in the field and have worked on more than five projects. I love building scalable and responsive web applications that provide a seamless user experience. I am proficient in a variety of programming languages and frameworks, including :
           JavaScript, 
            Python, Flask,
             HTML, CSS, jQuery, 
             PHP, Next.js, Node.js,reactjs and Express.
              I am comfortable working on both the front-end and back-end of web applications. Let's work together!</p>
          <a href='#contact' className='btn btn-primary'>LET'S TALK</a>
        </div>
      </div>
    </section>
  );
}


export default About;