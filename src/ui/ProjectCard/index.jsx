import { useState } from "react";
import "./ProjectCard.css";
import { TbEyeCode } from "react-icons/tb";
import ProjectModal from "../ProjectModal";

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(project)

  return (
    <>
      <div className="card project__card">
        <div className="project__card-top">
          <div className="picture">
            <img src={project.image} alt="" />
            <div className="overlay" onClick={() => setIsModalOpen(true)}>
              <div className="overlay-content">
                <TbEyeCode className="eye" />
              </div>
            </div>
          </div>
        </div>
        <div className="project__card-bottom">
          <div className="project__info">
            <div className="img">
              <img src={project.image} alt="" />
            </div>
          </div>
          <h3 className="title">{project.title}</h3>
          <p className="text__muted category">{project.category}</p>
        </div>
        <p className="text__muted description">{project.description}</p>
        <div className="stacks__preview__btn__wrapper">
          <div className="flex__center stacks">
            {project.stacks.map((stack, index) => (
              <div className="stack" key={index}>
                <img src={stack.logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;
