import { useState } from "react";
import "./Navbar.css";
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="card flex__center navbar">
      {showSideBar && (
        <div
          className="aside__overlay"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        ></div>
      )}

      <div
        className="nav__logo__wrapper"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      ></div>

      <aside className={`flex__center sidebar ${showSideBar ? "visible" : ""}`}>
        <div className="flex sidebar__top">
          <span
            className="icon__container close__btn"
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <FaTimes />
          </span>
        </div>
        <div className={` flex sidebar__middle`}>
          {menu.map((list, index) => (
            <Link
              to={list.name.toLocaleLowerCase()}
              key={index}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="tab"
              activeClass="btn__shine"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </aside>
      <div className="flex__center buttons__wrapper">
        <a
          href="/Safa_Belhouche_CV_EN.pdf"
          download="SafaBelhouch_CV.pdf"
          className="download__cv__btn"
        >
          <div className="download__cv__btn-inner">
            <p>Download CV</p>
          </div>
        </a>

        <FaBarsStaggered
          className="menu"
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
