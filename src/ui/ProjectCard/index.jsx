import { useState } from "react";
import "./ProjectCard.css";
import { TbEyeCode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "../ProjectModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAI = project.type === "ai";

  return (
    <>
      <div className={`card project__card ${isAI ? "ai__card" : ""}`}>
        {/* IMAGE */}
        <div className="project__card-top">
          <div className="picture">
            <img src={project.image} alt="" />

            <div
              className="overlay"
              onClick={() => {
                if (isAI) {
                  window.open(project.github, "_blank");
                } else {
                  setIsModalOpen(true);
                }
              }}
            >
              <div className="overlay-content">
                <TbEyeCode className="eye" />
              </div>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="project__card-bottom">
          <h3 className="title">{project.title}</h3>
          <p className="text__muted category">{project.category}</p>
        </div>

        <p className="text__muted description">{project.description}</p>

        {/* AI EXTRA INFO */}
        {isAI && (
          <div className="ai__details">
            <span className="badge">{project.mlType}</span>
            <span className="badge">{project.algorithm}</span>
          </div>
        )}

        {/* STACKS */}
        {!isAI && (
          <div className="stacks__preview__btn__wrapper">
            <div className="flex__center stacks">
              {project.stacks.map((stack, index) => (
                <div className="stack" key={index}>
                  <img src={stack.logo} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {!isAI && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={project}
        />
      )}
    </>
  );
};

export default ProjectCard;
