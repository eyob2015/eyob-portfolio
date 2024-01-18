import React from 'react';
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png'
import Headersocials  from './Headersocials'
const Header = () => {
  return (
    <header id="header">
     
 <div className='container header__container'>
<h5 className='text-light'>Nice to See You!</h5>
    <h1>Eyob Sisay</h1>
      
      <h1>FULL STACK  DEVELOPER</h1>
      <CTA></CTA>
      <Headersocials />
      <div className='me'>
      <img src={me}></img>

      </div>
      <a href='#contact'className='scrol__down'>scroll down</a>
        </div>
     
    </header>
    
  );
}

export default Header;