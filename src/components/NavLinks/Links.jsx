import React, { useEffect, useState } from "react";
import "./Links.css"
const links = [
  { id: "home", text: "Home" },
  { id: "about", text: "About Me" },
  { id: "Education", text: "Education" },
  { id: "myprojects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

const Links = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect(); 
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id); 
    }
  };
  

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <button
            className={`link-button ${
              activeSection === link.id ? "active" : ""
            }`}
            onClick={() => handleScroll(link.id)}
          >
            {link.text}
          </button>
        </li>
      ))}
    </>
  );
};

export default Links;
