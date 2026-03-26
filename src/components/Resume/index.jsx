import "./Resume.scss";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import Education from "../Education";
import Skills from "../Skills";
import Experience from "../Experience";
import { fadeIn, staggerChildren } from "../../utils/motion";

const tabs = [
  { id: 0, label: "Experience" },
  { id: 1, label: "Skills" },
  { id: 2, label: "Education" },
];

const Resume = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const tabsRef = useRef([]);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    const el = tabsRef.current[currentTab];
    if (el) {
      setSliderStyle({
        width: el.offsetWidth,
        transform: `translateX(${el.offsetLeft}px)`,
      });
    }
  }, [currentTab]);

  return (
    <motion.div
      id="resume"
      className="resume-container"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="resume-wrapper">
        <motion.div
          className="resume-title-section"
          variants={fadeIn("up", "tween", 0.1, 0.5)}
        >
          <div className="resume-title-bar" />
          <div className="resume-title">Resume</div>
          <div className="resume-title-bar" />
        </motion.div>

        <motion.div
          className="resume-tabs"
          variants={fadeIn("up", "tween", 0.2, 0.5)}
        >
          <div className="resume-tabs__track">
            <div className="resume-tabs__slider" style={sliderStyle} />
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => (tabsRef.current[i] = el)}
                className={`resume-tabs__btn ${currentTab === tab.id ? "is-active" : ""}`}
                onClick={() => setCurrentTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="tab-content">
          {currentTab === 0 && <Experience />}
          {currentTab === 1 && <Skills />}
          {currentTab === 2 && <Education />}
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
