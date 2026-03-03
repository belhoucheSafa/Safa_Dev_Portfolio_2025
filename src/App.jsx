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

import { UAParser } from "ua-parser-js";

const App = () => {
  useEffect(() => {
    const parser = new UAParser();
    const uaResult = parser.getResult();

    const deviceType = (uaResult.device.type || "desktop").toLowerCase();

    const deviceEmojiMap = {
      mobile: "📱",
      tablet: "📱",
      smarttv: "📺",
      console: "🎮",
      wearable: "⌚",
      desktop: "💻",
    };

    const deviceEmoji = deviceEmojiMap[deviceType] || "🖥️";

    const deviceInfo = `${deviceEmoji} ${
      deviceType.charAt(0).toUpperCase() + deviceType.slice(1)
    } - ${uaResult.os.name || ""} ${uaResult.os.version || ""} - ${
      uaResult.browser.name || ""
    } ${uaResult.browser.version || ""}`.trim();

    const payload = {
      url: window.location.href,
      referrer: document.referrer || "—",
      device: deviceInfo,
    };

    fetch(
      "https://safadev.app.n8n.cloud/webhook/portfolio-visit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }
    ).catch(() => {});
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
