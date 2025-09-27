import { useRef } from "react";
import "./GlowCard.css";

const GlowCard = ({ card, index, children }) => {
  // refs for all the cards
  const cardRefs = useRef([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove = (index) => (e) => {
    // get the current card
    const card = cardRefs.current[index];
    if (!card) return;

    // get the mouse position relative to the card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    card.style.setProperty("--start", angle + 60);
  };

  // return the card component with the mouse move event
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card__glow timeline-card "
    >
      <div className="glow"></div>
      <div className="stars">
        {Array.from({ length: card.rating }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="star-img" />
        ))}
      </div>
      <div className="review">
        <p dangerouslySetInnerHTML={{ __html: card.review }} />
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
