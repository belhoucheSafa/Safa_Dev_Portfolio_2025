import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import SplashCursor from "./components/SplashCursor";
import Hero from "./components/Hero";
import About from "./components/About";

import { Analytics } from "@vercel/analytics/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogosLoop from "./components/LogosLoop";
import GridMotion from "./components/GridMotion";

const App = () => {
  useEffect(() => {
    // Send visitor info to your n8n webhook
    fetch("https://belhouchesafa.app.n8n.cloud/webhook/c944a2d8-ab93-43a5-be1a-5b6e58844419", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: window.location.href,           // current page URL
        referrer: document.referrer || "—", // where visitor came from
        timestamp: new Date().toISOString(),// current time
        userAgent: navigator.userAgent       // browser info
      }),
      keepalive: true // ensures request is sent even if the user leaves
    }).catch(() => {});
  }, []);

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
