import { motion } from "framer-motion"; // Framer Motion

const MotionCard = ({ style, text, image, containerRef, className }) => {
  if (image && !text) {
    return (
      <motion.img
        className={`absolute cursor-grab motion-card-img ${className || ""}`}
        src={image}
        style={style}
        whileHover={{ scale: 1 }}
        drag
        dragConstraints={containerRef}
        dragElastic={1}
      />
    );
  } else {
    return (
      <motion.div
        className={`absolute cursor-grab motion-card-div ${className || ""}`}
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={1}
      >
        {text}
      </motion.div>
    );
  }
};


export default MotionCard;
