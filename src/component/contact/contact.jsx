import React, { useState } from 'react';

import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ysgif6u', 'template_s6h53ni', e.target, 'KCXkp-CFFZTtFH-VX')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent.');
      }, (error) => {
        console.log(error.text);
        alert('Sorry, an error occurred while sending your message.');
      });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className='contact-container'>
      <div className='contact-links'>
      
      </div>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-input-container'>
          <i className='bi bi-person form-icon'></i>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            value={formData.name}
            onChange={handleInputChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-input-container'>
          <i className='bi bi-envelope form-icon'></i>
          <input
            type='email'
            name='email'
            placeholder='Your email'
            value={formData.email}
            onChange={handleInputChange}
            className='form-input'
            required
          />
        </div>
        <div className='form-input-container'>
          <i className='bi bi-chat-dots form-icon'></i>
          <textarea
            name='message'
            placeholder='Your message'
            value={formData.message}
            onChange={handleInputChange}
            className='form-input'
            rows='5'
            required
          ></textarea>
        </div>
        <button type='submit' className='form-submit'>
          <i className='bi bi-cursor form-icon'></i>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;