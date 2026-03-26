import "./GoToTop.scss";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiArrowToTop } from "react-icons/bi";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      setIsVisible(winScroll > 300);
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="top-btn"
          onClick={goToBtn}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Scroll to top"
        >
          <BiArrowToTop className="top-btn-icon" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
