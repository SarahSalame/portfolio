import React from "react";
import myImg from "../../assets/images/myImg.png";
import squares from "../../assets/images/squares.svg";
import gradiant from "../../assets/images/BlurGradient.webp";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <img src={gradiant} alt="Background Gradient" className="background-gradient" />
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>
              <span>HEY!</span> I’m Sarah, Frontend Developer
            </h1>
            <p>
              Hi there! I'm a Frontend Developer passionate about building smooth user
              experiences and engaging interfaces using modern technologies.
            </p>
            <a href="pdf/SarahSalameCv.pdf" download>
              Download CV
            </a>
          </div>
          <div className="hero-image">
            <img src={myImg} alt="Sarah" className="main-img" />
            <img src={squares} alt="Decorative squares" className="squares-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
