

import React from "react";
import { Link } from "react-scroll";
import SocialHandles from "../../ui/SocialHandles";
import { menu } from "../../data";
import ParticlesBackground from "../ParticlesBackground";
import "./Footer.css";

const Footer = () => { 
  return (
    <footer className="footer-with-particles">
      <ParticlesBackground />

      {/* Footer Content */}
      <div className="section__wrapper">
        <ul className="flex__center nav">
          {menu.map((list, index) => (
            <Link
              to={list.name.toLowerCase()}
              smooth={true}
              duration={500}
              className="tab"
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>
        <SocialHandles />
        <div className="copyright">
          <h3>Copyright &copy; All right reserved - 2025</h3>
          <p className="text__muted">Built by Safa Belhouche</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">Safa Belhouche</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
