import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'><h3>Download My CV or <br />Contact Me</h3>
    
    <a href={CV}download className='btn'>Download CV</a>
    <a href='#contact'className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA