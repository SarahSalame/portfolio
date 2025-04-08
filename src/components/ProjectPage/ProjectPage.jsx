import { useParams } from "react-router-dom";
import { projects } from "../Cards/Cards";
import "./ProjectPage.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/Context";
import dot from "../../assets/images/dot.svg";
import dot1 from "../../assets/images/dot1.svg";

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { theme } = useContext(ThemeContext);

  if (!project) {
    return <h1>Project Not Found</h1>;
  }

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <>
      <div className="project-page">
        <img
          src={theme === "light" ? dot : dot1}
          alt="ellipse"
          className="dashedborder"
        />
        <div className="image-container">
          <img src={project.projectImg} alt={project.title} />
          <div className="hover-icons">
            <div
              className="icon fullscreen-icon"
              onClick={() => setIsModalOpen(true)}
            >
              <BsArrowsFullscreen />
            </div>
            <a
              href={project.demoLink}
              target="_blank"
              className="icon demo-icon"
              rel="noreferrer"
            >
              <LuCircleArrowOutUpRight />
            </a>
          </div>
        </div>

        <div className="projectdetails">
          <div className="headercontent">
            <h1>{project.title}</h1>
            <a href={project.demoLink} target="_blank" rel="noreferrer">
              <img src={project.icon} className="gotoicon" alt="Project Icon" />
            </a>
          </div>

          <p className="date">{project.date}</p>
          <p>{project.description}</p>

          <p>
            <span>Basic Languages: </span>
            {project.languages ? project.languages.join(", ") : "No languages specified"}
          </p>
          <p>
            <span>Framework: </span>
            {project.framework && project.framework.length > 0
              ? project.framework.join(", ")
              : "No frameworks used"}
          </p>
          <p>
            <span>Libraries: </span>
            {project.libraries && project.libraries.length > 0
              ? project.libraries.join(", ")
              : "No libraries used"}
          </p>

          <div className="repo-button">
            <a href={project.repo} target="_blank" rel="noreferrer">
              <button>Github Repo</button>
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className={`modal-overlay ${isClosing ? "closing" : ""}`}
          onClick={handleCloseModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.projectImg}
              alt={project.title}
              className={`modal-image ${isClosing ? "closing" : ""}`}
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
