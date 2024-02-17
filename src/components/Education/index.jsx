import "./Education.scss";

import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Education = () => {
  return (
    <motion.div id="education" className="education-container">
      <motion.div
        className="education-wrapper"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="timeline-container">
          <div className="education-timeline">
            <ul>
              <li>
                <div className="education-timeline-content">
                  <h3 className="education-timeline-date">
                    October 2023 - current
                  </h3>
                  <h3 className="education-timeline-institute">
                    "Babes-Bolyai" University
                  </h3>
                  <div className="education-timeline-city">
                    Cluj-Napoca, Cluj, Romania
                  </div>
                  <h5 className="education-field">Databases, Master Degree</h5>
                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      Master's student focused on advanced databases. Seeking
                      in-depth knowledge, practical skills, and collaborative
                      research opportunities in database systems and management
                    </span>
                  </motion.div>
                </div>
              </li>
              <li>
                <div className="education-timeline-content">
                  <h3 className="education-timeline-date">
                    October 2020 - June 2023
                  </h3>
                  <h3 className="education-timeline-institute">
                    "Babes-Bolyai" University
                  </h3>
                  <div className="education-timeline-city">
                    Cluj-Napoca, Cluj, Romania
                  </div>
                  <h5 className="education-field">
                    Mathematics and Computer Science, Bachelor's Degree
                  </h5>
                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>Graduated with a Bachelor's Degree</span>
                  </motion.div>
                  <motion.div
                    variants={textVariant(0.8)}
                    style={{
                      display: "flex",
                      alignItems: "start",
                      marginTop: "5px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      During my undergraduate studies, I acquired a solid
                      foundation in computer science and developed valuable
                      teamwork skills through collaborative projects
                    </span>
                  </motion.div>
                </div>
              </li>
              <li>
                <div className="education-timeline-content">
                  <h3 className="education-timeline-date">
                    September 2016 - June 2020
                  </h3>
                  <h3 className="education-timeline-institute">
                    "Doamna Stanca" National College
                  </h3>
                  <div className="education-timeline-city">
                    Satu Mare, Romania
                  </div>
                  <h5 className="education-field">
                    Mathematics and Computer Science, Intensive Computer Science
                  </h5>
                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>Graduated with a Baccalaureate Diploma</span>
                  </motion.div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
