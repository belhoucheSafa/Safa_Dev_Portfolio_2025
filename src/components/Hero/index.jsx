import "./Hero.css";
import { words } from "../../constants";
import ParticlesBackground from "../ParticlesBackground";

const Hero = () => {
  return (
    <div className="section__wrapper" id="hero">
      <ParticlesBackground />

      <div className="hero__section__top">
        <div className="hero-left">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className="cube">
                      <div className="cube-img-wrapper">
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="cube-img"
                        />
                      </div>

                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>into Real Projects</h1>
            <h1>that Deliver Results</h1>
          </div>
          <p className="hero-subtext">
            Crafting elegant code, building impactful projects, and exploring<br/>
            the future of technology
            <br />
          </p>
          <p> All from the heart of Tunisia</p>
          <div className="available__badge">
            <div className="badge__dot"></div>
            <div className="badge__text">Available for work</div>
          </div>
        </div>

        <div className="hero-right"></div>
      </div>

      <div className="hero__section__bottom">
        <div className="scroll-down"></div>
      </div>
    </div>
  );
};

export default Hero;
