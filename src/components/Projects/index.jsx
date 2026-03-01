import "./Projects.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, aiProjects } from "../../data";
import ProjectCard from "../../ui/ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  let currentProjects = [];

  if (activeTab === "projects") {
    // All except last 3 UI/UX projects
    currentProjects = projects.slice(0, projects.length - 3);
  } else if (activeTab === "aiProjects") {
    currentProjects = aiProjects;
  } else if (activeTab === "uiux") {
    // Last 3 projects are UI/UX
    currentProjects = projects.slice(-3);
  } else if (activeTab === "mobile") {
    currentProjects = []; // Nothing yet
  }

  return (
    <section id="projects">
      <div className="section__wrapper">
        <div className="section__header projects__header">
          <h2 className="shine">Projects</h2>
        </div>

        {/* Tabs */}
        <div className="projects__types__btns">
          {[
            { id: "projects", label: "Web" },
            { id: "aiProjects", label: "AI & ML & DL" },
            { id: "uiux", label: "UI / UX" },
          ].map((btn) => (
            <div
              key={btn.id}
              className={`project__type__btn ${
                activeTab === btn.id ? "selected__project__type__btn" : ""
              }`}
              onClick={() => setActiveTab(btn.id)}
            >
              {btn.id === "aiProjects" && (
                <svg
                  className="w-5 h-5 text-[#7b54ee] flex-shrink-0"
                  stroke="none"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  />
                </svg>
              )}

              <span className={activeTab === btn.id ? "btn__shine text" : ""}>
                {btn.label}
              </span>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="projects__container">
          <AnimatePresence mode="wait">
            {currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="coming-soon"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="coming-soon"
                style={{ width: "100%" }} // full width
              >
                <svg viewBox="0 0 64 64">
                  <path d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm0 58C17.664 58 6 46.336 6 32S17.664 6 32 6s26 11.664 26 26-11.664 26-26 26z" />
                  <path d="M32 16a2 2 0 00-2 2v18a2 2 0 004 0V18a2 2 0 00-2-2zM32 40a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                </svg>
                Coming Soon...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
