import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="bg-particles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#884eb1" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: 3, random: true },
          links: { 
            enable: true, 
            distance: 100, 
            color: "#884eb1", 
            opacity: 0.1, 
            width: 1 
          },
          move: { 
            enable: true, 
            speed: 0.5, 
            direction: "none", 
            outModes: { default: "out" } 
          },
        },
        interactivity: { 
          events: { 
            onHover: { enable: false }, 
            onClick: { enable: false } 
          } 
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;