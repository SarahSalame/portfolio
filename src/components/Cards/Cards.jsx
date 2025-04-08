import React from "react";
import { Link } from "react-router-dom";
import projectpng1 from "../../assets/images/Blog.png";
import projectpng2 from "../../assets/images/DashStack.png";
import projectpng3 from "../../assets/images/B-World.png";
import projectpng4 from "../../assets/images/ManagePosts.png";
import projectpng5 from "../../assets/images/EduPress.png";
import projectpng6 from "../../assets/images/flora.png";
import projectpng7 from "../../assets/images/Cozy.png";

import arrowup from "../../assets/images/arrowup.svg";
import "./Cards.css";

export const projects = [
  {
    id: 1,
    link: " https://sarahsalame.github.io/My-Blog/",
    repo: "https://github.com/SarahSalame/My-Blog",
    img: projectpng1,
    projectImg: projectpng1,
    title: "Blogs",
    icon: arrowup,
    date: "2025-03-01",
    demoLink: " https://sarahsalame.github.io/My-Blog/",
    libraries: ["React", "React Router"],
    languages: ["HTML", "CSS", "Vanilla Javascript"],
    framework: [],
    description:
      "An innovative online platform offering comprehensive and in-depth articles on a variety of topics, with a sleek and modern design that seamlessly adapts to different devices and screen sizes, providing a comfortable and engaging reading experience for users.",
  },
  {
    id: 2,
    link: "https://sarahsalame.github.io/DASHSTACK/",
    repo: "https://github.com/SarahSalame/DASHSTACK",
    img: projectpng2,
    projectImg: projectpng2,
    title: "Dashboard",
    icon: arrowup,
    date: "2025-03-10",
    demoLink: "https://sarahsalame.github.io/DASHSTACK/",
    libraries: ["React", "React Router"],
    languages: ["HTML", "CSS", "Vanilla Javascript"],
    framework: [],
    description:
  "DashStack is a dynamic and interactive web application designed for managing products through a responsive admin dashboard. It includes user authentication (sign up, login, logout) and full CRUD operations (create, read, update, delete) for products. Built with React and React Router, it offers a smooth and intuitive user experience.",
  },
  {
    id: 3,
    link: "https://sarahsalame.github.io/B-World/",
    repo: "https://github.com/SarahSalame/B-World",
    img: projectpng3,
    projectImg: projectpng3,
    title: "B-World",
    icon: arrowup,
    date: "2025-02-10",
    demoLink: " https://sarahsalame.github.io/B-World/",
    libraries: ["Fetch API", "LocalStorage"],
    languages: ["HTML", "CSS", "Vanilla Javascript"],
    framework: [],
    description:
      "A dynamic and responsive web application for book lovers. BookWorld allows users to browse a curated list of books fetched from an external API. Each book card displays key information and includes a View Details button that leads to a detailed page about the selected book",
  },
  {
    id: 4,
    link: "https://sarahsalame.github.io/posts-management/",
    repo: "https://github.com/SarahSalame/posts-management",
    img: projectpng4,
    projectImg: projectpng4,
    title: "Manage Posts",
    icon: arrowup,
    date: "2025-01-11",
    demoLink: "https://sarahsalame.github.io/posts-management/",
    languages: ["HTML", "CSS", "Vanilla JavaScript"],
    libraries: ["Fetch API", "DOM Manipulation"],
    framework: [],
    description:
      "A simple post management web app that allows users to add, edit, and delete posts dynamically using vanilla JavaScript and RESTful API integration. Built with HTML, CSS, and JavaScript.",
  },  
  {
    id: 5,
    link: "https://sarahsalame.github.io/EduPress/",
    repo: "https://github.com/SarahSalame/EduPress",
    img: projectpng5,
    projectImg: projectpng5,
    title: "EduPress",
    icon: arrowup,
    date: "2024-10-10",
    demoLink: "https://sarahsalame.github.io/EduPress/",
    libraries: [],
    languages: ["HTML", "CSS", "Vanilla Javascript"],
    framework: [],
    description:
      "EduPress is a modern and responsive educational website template designed to provide online learning experiences. It features a user-friendly interface, course listings, blog integration, and authentication pages like login and register. The site is built using HTML, CSS, and JavaScript, and includes a responsive navigation menu, a mobile-friendly sidebar, and a structured footer with contact information and social media links.",
  },
  {
    id: 6,
    link: "https://sarahsalame.github.io/flora/",
    repo: "https://github.com/SarahSalame/flora",
    img: projectpng6,
    projectImg: projectpng6,
    title: "flora",
    icon: arrowup,
    date: "2024-9-15",
    demoLink: "https://sarahsalame.github.io/flora/",
    libraries: [],
    languages: ["HTML", "CSS"],
    framework: [],
    description:
      "A real estate website template designed with HTML and CSS. This project helped me practice responsive layouts, semantic HTML structure, and UI/UX design principles."
  },
  {
    id: 7,
    link: "https://sarahsalame.github.io/Cozy/",
    repo: "https://github.com/SarahSalame/Cozy",
    img: projectpng7,
    projectImg: projectpng7,
    title: "Cozy",
    icon: arrowup,
    date: "2024-11-11",
    demoLink: "https://sarahsalame.github.io/Cozy/",
    libraries: [],
    languages: ["HTML", "CSS", "Vanilla Javascript"],
    framework: [],
    description:
    "Cozy is a simple and interactive online store built using HTML, CSS, and Vanilla JavaScript. It includes a dynamic product listing, live search functionality, discount handling, and a cart popup that shows selected items with the total price. The project focuses on DOM manipulation and user-friendly UI.",
  },
];

const Cards = ({ style }) => {
  return (
    <div className="cardsContainer">
      {projects.map((project) => (
        <div style={style} className="card" key={project.id}>
          <a target="_blank" href={project.link}>
            <img src={project.img} alt="project img" className="project-img"/>
          </a>
          <p>{project.title}</p>
          <div>
            <span>{project.languages.join(" - ")}</span>
            <Link
              aria-label="go to project details"
              to={`/project/${project.id}`}
            >
              <img src={arrowup} alt="arrow icon" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
