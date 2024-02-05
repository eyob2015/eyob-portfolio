import React from 'react';
import Header from '../header/header';
import Nav from '../nav/NavBar';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import Portfolio from '../portfolio/portfolio';
import Services from '../services/services';
//import Testimonials from './component/testimonials/testimonials';

import './home.css'



function Home() {
  return (
<div className='home'>
<Header />
<About />
<Experience />
<Services />
<Portfolio />
<Contact />

</div>
  )
}

export default Home
