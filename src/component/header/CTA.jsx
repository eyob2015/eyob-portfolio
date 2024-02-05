import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'><h3><br /></h3>
    
    <a href={CV}download className='btn btn-primary'>Download CV</a>
    <a href='#contact'className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA