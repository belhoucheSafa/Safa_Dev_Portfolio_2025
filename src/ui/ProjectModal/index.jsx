import { useState, useEffect, useRef } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import "./ProjectModal.css";
import SyntaxHighlight from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoLockClosed } from "react-icons/io5";

const customTheme = {
  ...a11yLight,
  "hljs-comment": { color: "#888888", fontStyle: "italic" },
  "hljs-keyword": { color: "#cf7f4a", fontWeight: "bold" },
  "hljs-number": { color: "#cf7f4a" },
  "hljs-string": { color: "#bab5c1" },
  "hljs-variable": { color: "#7c3fff", fontWeight: "bold" },
};
const ProjectModal = ({ isOpen, onClose, project }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [wasOpened, setWasOpened] = useState(false);
  const playerRef = useRef(null);
  const modalRef = useRef(null);

  console.log(project);

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("one"); // run open animation
      setWasOpened(true);
      document.body.classList.add("modal-active");
    } else if (wasOpened) {
      // only run close animation if it was opened before
      setAnimationClass("one out");
      document.body.classList.remove("modal-active");

      const timer = setTimeout(() => {
        setAnimationClass(""); // reset after animation ends
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, wasOpened]);

  // Reset the player when modal closes
  useEffect(() => {
    if (!isOpen && playerRef.current) {
      const player = playerRef.current.plyr;
      if (player && typeof player.stop === "function") {
        player.stop();
      }
    }
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen && playerRef.current) {
      const video = playerRef.current;
      video.pause();
      video.currentTime = 0;
      video.removeAttribute("src"); // unload
      video.load(); // reset completely
    }
  }, [isOpen]);

  if (!isOpen && animationClass === "") return null;

  return (
    <>
      <div id="modal-container" className={animationClass}>
        <div className="modal-wrapper">
          <div className="modal-background">
            <div className="modal" ref={modalRef}>
              <div className="screen__top__bar">
                <div className="three__dots__screen_wrapper">
                  <div
                    className="one__dot__modal dot__1"
                    onClick={onClose}
                    style={{ cursor: "pointer" }}
                  ></div>
                  <div className="one__dot__modal dot__2"></div>
                  <div className="one__dot__modal dot__3"></div>
                </div>
                <div className="screen__tab__title">
                  <IoLockClosed className="locked__icon" /> https://Demo/
                  {project.title}
                </div>
              </div>

              <div className="screen__content">
                <div className="preview__box">
                  <div className="web__demo">
                    <video
                      key={project.video}
                      ref={playerRef}
                      src={project.video}
                      controls
                      preload="auto"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="bottom__box__demo">
                    Copyright © All right reserved to Safa Belhouche
                  </div>
                </div>
                <div
                  className={`demo__details__box ${
                    project.mobileVideo ? "mobile__demo__box" : ""
                  }`}
                >
                  <div
                    className={`demo__details__code__block ${
                      project.mobileVideo
                        ? "mobile__demo__details__code__block"
                        : ""
                    }`}
                  >
                    {project.mobileVideo ? (
                      <video
                        key={project.mobileVideo}
                        ref={playerRef}
                        src={project.mobileVideo}
                        controls
                        preload="auto"
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    ) : (
                      <SyntaxHighlight
                        language="javascript"
                        style={customTheme}
                        className="block__code__wrapper__demo"
                        customStyle={{
                          background: "transparent",
                          padding: "10px",
                          fontSize: "14px",
                          textAlign: "left",
                          color: "#7c3fff",
                          whiteSpace: "pre-wrap",
                        }}
                        wrapLongLines={true}
                      >
                        {project.projectCode}
                      </SyntaxHighlight>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
