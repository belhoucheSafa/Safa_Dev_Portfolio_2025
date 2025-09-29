import React from "react";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import SplashCursor from "./components/SplashCursor";
import Hero from "./components/Hero";
import About from "./components/About";

import { Analytics } from "@vercel/analytics/react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogosLoop from "./components/LogosLoop";
import GridMotion from "./components/GridMotion";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <LogosLoop />
      <Projects />
      <GridMotion />
      <Contact />
      <Footer />
      <SplashCursor />
       <Analytics />
    </>
  );
};

export default App;
