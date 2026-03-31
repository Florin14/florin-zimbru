import { motion } from "framer-motion";
import "./Preloader.scss";

export const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      {/* Background ambient glow */}
      <div className="preloader-glow" />

      <div className="preloader-content">
        {/* Animated hexagon frame */}
        <motion.svg
          className="preloader-hex"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <defs>
            <linearGradient id="pre-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6c63ff" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
          </defs>

          {/* Outer hex - draws in */}
          <motion.path
            d="M60 5 L110 32.5 L110 87.5 L60 115 L10 87.5 L10 32.5 Z"
            stroke="url(#pre-grad)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Inner hex - draws in with delay */}
          <motion.path
            d="M60 18 L100 38 L100 82 L60 102 L20 82 L20 38 Z"
            stroke="url(#pre-grad)"
            strokeWidth="0.8"
            fill="rgba(108, 99, 255, 0.04)"
            opacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
          />

          {/* FZ text */}
          <motion.text
            x="60"
            y="60"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Inter, Poppins, sans-serif"
            fontWeight="700"
            fontSize="36"
            fill="url(#pre-grad)"
            letterSpacing="-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            FZ
          </motion.text>
        </motion.svg>

        {/* Name text below */}
        <motion.p
          className="preloader-name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Florin Zimbru
        </motion.p>

        {/* Loading bar */}
        <motion.div
          className="preloader-bar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="preloader-bar__fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
