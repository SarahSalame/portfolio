import React from "react";
import Cards from "../Cards/Cards";
import "./MyProjects.css";
import { GoArrowUpRight } from "react-icons/go";

const MyProjects = () => {
  return (
    <div className="container">
      <section id="myprojects">
        <div className="section-header">
          <div className="titleSection">
            <p>Portfolio</p> 
            <h1>My Creative Works Latest</h1> 
            <span> Projects</span>
          </div>
          <a
                target="_blank"
                href="https://github.com/SarahSalame"
                className="goto-github"
              >
                View Github
                <GoArrowUpRight className="icon" />
              </a>
        </div> 
        <Cards /> 
      </section>
    </div>
  );
};

export default MyProjects;
