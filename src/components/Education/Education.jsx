import React, { useContext } from 'react'
import { ThemeContext} from "./../Context/Context";
import BorderImg from "../../assets/images/borderImg.png"
import border1 from "../../assets/images/borderImg1.png";
import squares from "../../assets/images/educationSquares.svg";
import "./Education.css"
const Education = () => {
  const { theme} = useContext(ThemeContext);
  return (
    <>
    <div className="container">
        <section id='Education'>
        <img src={squares} alt="squares" />
        <img src={squares} alt="squares" />
        <p className='title'>Education and Experience</p>
        <h1>Education & Experience</h1>
    <div className='content'>
                <img src={theme === "dark" ? border1 : BorderImg} alt="border" className='borderImg' />
    <div className="about">
    <h2>Frontend Developer Intern</h2>
    <p>
      Completed a frontend development internship at Vica Web Solution, where I designed and built responsive web interfaces using HTML, CSS, JavaScript, React, Tailwind, and Material UI. I worked with APIs, collaborated with developers, and gained hands-on experience creating real-world web applications.
    </p>
  </div>
  <img src={theme === "dark" ? border1 : BorderImg} alt="border" className='borderImg'/>
  <div className="about">
    <h2>Informatics Engineering Student</h2>
    <p>
      Pursuing a Bachelor's degree in Informatics Engineering Homs University , Syria (2021 – Present). Passionate about frontend development and continuously learning new technologies to grow my skills.
    </p>
  </div>
</div>
    </section>
    </div>
    </>
  )
}

export default Education