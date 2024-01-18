import React, { useState } from 'react';
import './testimonials.css';
import av1 from '../../assets/avatar1.jpg';
import av2 from '../../assets/avatar2.jpg';
import av3 from '../../assets/avatar3.jpg';
import av4 from '../../assets/avatar4.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel risus ac tortor placerat tempus. Vivamus porta metus id est molestie, sed gravida est sodales. Fusce eget dui quis nisi dictum blandit.',
    image: av1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    comment:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam mollis sem vitae nulla lobortis, vel luctus leo bibendum. Proin euismod velit non leo vestibulum, sit amet venenatis tellus aliquet.',
    image: av2,
  },
  {
    id: 3,
    name: 'Bob Johnson',
    comment:
      'Nullam mollis tortor eu venenatis volutpat. Duis id elit vel dolor convallis commodo. Praesent felis metus, suscipit nec ipsum at, semper pellentesque sem. Aliquam erat volutpat. Donec consectetur lacus et metus lobortis, eu tristique est feugiat.',
    image: av3,
  },
  {
    id: 4,
    name: 'Emily Brown',
    comment:
      'Nam eget aliquam sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pharetra, justo vel congue accumsan, libero ipsum eleifend velit, ac maximus nisl mi id ligula. In hac habitasse platea dictumst.',
    image: av4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setActiveIndex(next);
  };

  const renderSlides = () => {
    return testimonialsData.map((testimonial) => (
      <div className='testimonial-card' key={testimonial.id}>
        <div className='testimonial-img-container'>
          <img src={testimonial.image} alt={testimonial.name} className='testimonial-img' />
        </div>
        <div className='testimonial-content'>
          <h3 className='testimonial-name'>{testimonial.name}</h3>
          <p className='testimonial-comment'>{testimonial.comment}</p>
        </div>
      </div>
    ));
  };

  const renderDots = () => {
    return testimonialsData.map((testimonial, index) => (
      <span
        key={testimonial.id}
        className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
        onClick={() => setActiveIndex(index)}
      ></span>
    ));
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };

  return (
    <div className='testimonials-container'>
      <Slider {...sliderSettings}>{renderSlides()}</Slider>
      <div className='testimonial-pagination'>{renderDots()}</div>
    </div>
  );
};

export default Testimonials;