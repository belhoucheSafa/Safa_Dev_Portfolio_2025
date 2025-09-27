import "./Experience.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../../constants";
import GlowCard from "../../ui/GlowCard";

import CALENDAR from "../../assets/icons/3DCalendar.png";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {

    gsap.utils.toArray(".timeline-card").forEach((card) => {

      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });


    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<"); 
  }, []);

  return (
    <section id="experience">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Education & Experience</h2>
        </div>
        <div className="experience-inner">
          <div className="experience-cards">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="timeline-wrapper">
                  <div className="timeline" />
                  <div className="gradient-line" />
                </div>
                <div className="expText">
                  <div className="timeline-logo">
                    <img src={card.logoPath} alt="logo" />
                  </div>
                  <div className="exp__details__wrapper">
                    <div className="left__details">
                      <h1>{card.title}</h1>
                      <p className="date italic">
                        <img
                          src={CALENDAR}
                          alt="calendar"
                          className="date-calendar-img"
                        />

                        
                        {card.date}
                      </p>
                      <ul>
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index}> {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="right__details">
                      <GlowCard card={card}></GlowCard>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; /* Section wrapper */
