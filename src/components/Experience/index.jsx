import "./Experience.scss";

import React from "react";

import { motion } from "framer-motion";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { staggerChildren, textVariant } from "../../utils/motion";

const Experience = () => {
  return (
    <motion.div id="experience" className="experience-container">
      <motion.div
        className="experience-wrapper"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="timeline-container">
          <div className="experience-timeline">
            <ul>
              <li>
                <div className="experience-timeline-content">
                  <h3 className="experience-timeline-date">
                    April 2023 - current
                  </h3>
                  <h3 className="experience-timeline-institute">
                    Junior FullStack Developer (Flask/FastAPI + NextJs)
                  </h3>
                  <div className="experience-timeline-company">
                    Cicada Tehnologies
                  </div>
                  <div className="experience-timeline-city">
                    Cluj-Napoca, Cluj, Romania
                  </div>
                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      I actively engaged in technical discussions during
                      refinement and planning meetings.
                    </span>
                  </motion.div>
                  <motion.div
                    variants={textVariant(0.8)}
                    style={{
                      display: "flex",
                      marginTop: "5px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      Embracing Agile methodologies, I provided technical
                      solutions while refining my technical skills
                    </span>
                  </motion.div>
                </div>
              </li>
              <li>
                <div className="experience-timeline-content">
                  <h3 className="experience-timeline-date">
                    April 2023 - July 2023
                  </h3>
                  <h3 className="experience-timeline-institute">
                    FullStack Intern (Flask/FastAPI + NextJs)
                  </h3>
                  <div className="experience-timeline-company">
                    Cicada Tehnologies
                  </div>
                  <div className="experience-timeline-city">
                    Cluj-Napoca, Cluj, Romania
                  </div>
                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      I delved deeper into ReactJs and NextJs, expanding my
                      proficiency
                    </span>
                  </motion.div>
                  <motion.div
                    variants={textVariant(0.8)}
                    style={{
                      display: "flex",
                      marginTop: "5px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      Additionally, I enhanced my Python skills, gaining
                      hands-on experience with SQL queries and cron jobs on
                      real-world projects. Primarily focused on management and
                      custom software projects
                    </span>
                  </motion.div>
                </div>
              </li>
              <li>
                <div className="experience-timeline-content">
                  <h3 className="experience-timeline-date">
                    July 2022 - September 2022
                  </h3>
                  <h3 className="experience-timeline-institute">
                    Frontend Intern (ReactJs)
                  </h3>
                  <div className="experience-timeline-company">
                    3Pillar Global
                  </div>
                  <div className="experience-timeline-city">
                    Cluj-Napoca, Cluj, Romania
                  </div>

                  <motion.div
                    variants={textVariant(0.6)}
                    style={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <ArrowRightAltIcon />
                    <span>
                      During my first frontend internship, I acquired
                      foundational skills in ReactJs and engaged with
                      experienced professionals in an American corporate
                      setting, fostering English communication and collaborative
                      learning.
                    </span>
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

export default Experience;
