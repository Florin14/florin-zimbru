import "./Skills.scss";

import React from "react";
import { motion } from "framer-motion";

import { skills } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Skills = () => {
  return (
    <motion.div className="skills-container" id="skills">
      <div className="skills-wrapper">
        <div className="skills-message">
          Here are some of my skills on which I have been working on for the
          past year.
        </div>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="skills"
        >
          {skills?.map((skill, index) => (
            <motion.div
              variants={fadeIn("down", "tween", 0.5 + index * 0.2, 0.6)}
              className="skills-section"
            >
              <h2 className="skill-title">{skill?.title}</h2>
              <div className="skills-list">
                {skill?.skills.map((item) => (
                  <div className="skill-item">
                    <img className="skill-image" src={item?.image} />
                    {item?.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
