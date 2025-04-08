import myskills from "../../assets/images/aboutimage.png";
import dot from "../../assets/images/dot.svg";
import dot1 from "../../assets/images/dot1.svg";
import React, { useState, useEffect, useContext } from "react";
import "./About.css"
import { ThemeContext } from "../Context/Context";
const skillsData = [
  { name: "HTML5", value: 90 },
  { name: "CSS3", value: 85 },
  { name: "JavaScript", value: 95 },
  { name: "React", value: 90 },
];

const About = () => {
  const { theme } = useContext(ThemeContext);
  const [progress, setProgress] = useState(skillsData.map(() => 0));
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setProgress(skillsData.map(skill => skill.value));
        } else {
          setProgress(skillsData.map(() => 0)); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section id="about">
    <img src={theme === "light" ? dot : dot1} alt="ellipse" className="dashedborder"/>
      <div className="image-container">
        <img src={myskills} alt="Profile" />
      </div>
      <div className="skills">
        <h1>About Me</h1>
        <p>
            I'm a frontend developer intern at Vica Web Solution, based in Homs, Syria. I love building clean, responsive, and interactive websites using technologies like HTML, CSS, JavaScript, and React. I'm passionate about creating smooth user experiences and always eager to learn new tools and frameworks. Currently, I'm studying Informatics Engineering at Al-Baath University and continuously improving my skills in frontend development.
        </p>
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-name">{skill.name}</span>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress[index]}%` }}
              >
                <div className="tooltip-wrapper">
                  <div className="tooltip">{progress[index]}%</div>
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </section>
    </>
  );
};

export default About;
