import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>{'<'}</button>
      <img className="image" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button className="next" onClick={nextSlide}>{'>'}</button>
    </div>
  );
};

export default Carousel;
