import React, { useState } from "react";
import Cards from "../../Cards/Cards";
import { projects } from "../../Cards/Cards";
import "../ProjectSlider/ProjectSlider.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="sliderHeader">
          <span>Portfolio</span>
          <div className="sliderTop">
            <p>
              The Best <span>Projects</span>
            </p>
            <div className="navButtons">
              <button aria-label="Previous project" onClick={prevSlide}>
                <GrPrevious />
              </button>
              <button aria-label="Next project" onClick={nextSlide}>
                <GrNext />
              </button>
            </div>
          </div>
        </div>
        <div className="cardsWrapper">
          <Cards style={{ transform: `translateX(${activeIndex * -100}%)` }} />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
