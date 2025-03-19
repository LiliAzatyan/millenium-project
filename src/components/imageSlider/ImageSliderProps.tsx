import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./imageSlider.css";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <button className="slider-btn left" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <img src={images[currentIndex]} alt="Project" className="slider-image" />
      <button className="slider-btn right" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
