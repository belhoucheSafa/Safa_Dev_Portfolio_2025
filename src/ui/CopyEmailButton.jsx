import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import COPYIMG from "../assets/copy.svg";
import COPYIMGDONE from "../assets/copy-done.svg";
import Lottie from "react-lottie";
import animationData from "../constants/confetti.json"; 

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "safabelhouch@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="copy__mail__btn__wrapper relative">
      {/* ✅ show Lottie only when copied = true */}
      {copied && (
        <div className="absolute -bottom-5 right-0">
          <Lottie options={defaultOptions} height={200} width={400} />
        </div>
      )}

      <motion.button
        onClick={copyToClipboard}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 1.05 }}
        className="copy__email__btn"
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copied"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img src={COPYIMGDONE} className="copy__icon" alt="copy Icon" />
              Email has Copied
            </motion.p>
          ) : (
            <motion.p
              className="flex items-center justify-center gap-2"
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <img src={COPYIMG} className="copy__icon" alt="copy icon" />
              Copy Email Address
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default CopyEmailButton;
