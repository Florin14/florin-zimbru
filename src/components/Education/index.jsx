import "./Education.scss";

import React from "react";
import { motion } from "framer-motion";
import { staggerChildren, fadeIn } from "../../utils/motion";

const educationData = [
  {
    date: "October 2023 - Present",
    institution: '"Babes-Bolyai" University',
    location: "Cluj-Napoca, Romania",
    degree: "Databases, Master's Degree",
    points: [
      "Focused on advanced databases, seeking in-depth knowledge, practical skills, and collaborative research opportunities in database systems and management",
    ],
  },
  {
    date: "October 2020 - June 2023",
    institution: '"Babes-Bolyai" University',
    location: "Cluj-Napoca, Romania",
    degree: "Mathematics and Computer Science, Bachelor's Degree",
    points: [
      "Graduated with a Bachelor's Degree",
      "Acquired a solid foundation in computer science and developed valuable teamwork skills through collaborative projects",
    ],
  },
  {
    date: "September 2016 - June 2020",
    institution: '"Doamna Stanca" National College',
    location: "Satu Mare, Romania",
    degree: "Mathematics and Computer Science, Intensive CS",
    points: ["Graduated with a Baccalaureate Diploma"],
  },
];

const Education = () => {
  return (
    <motion.div
      id="education"
      className="education-container"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="education-cards">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="edu-card"
            variants={fadeIn("up", "tween", index * 0.15, 0.5)}
          >
            <div className="edu-card-header">
              <div className="edu-card-left">
                <span className="edu-date">{edu.date}</span>
                <h3 className="edu-institution">{edu.institution}</h3>
                <span className="edu-location">{edu.location}</span>
              </div>
              <div className="edu-card-right">
                <span className="edu-degree">{edu.degree}</span>
              </div>
            </div>
            <div className="edu-card-body">
              {edu.points.map((point, i) => (
                <div key={i} className="edu-point">
                  <span className="edu-point-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
