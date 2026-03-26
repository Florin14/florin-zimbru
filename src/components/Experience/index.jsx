import "./Experience.scss";

import React from "react";
import { motion } from "framer-motion";
import { staggerChildren, fadeIn } from "../../utils/motion";

const experienceData = [
  {
    date: "April 2023 - Present",
    role: "FullStack Developer",
    tech: "Flask / FastAPI + Next.js",
    company: "Cicada Technologies",
    location: "Cluj-Napoca, Romania",
    points: [
      "Actively engaged in technical discussions during refinement and planning meetings",
      "Embracing Agile methodologies, provided technical solutions while continuously refining technical skills",
    ],
  },
  {
    date: "April 2023 - July 2023",
    role: "FullStack Intern",
    tech: "Flask / FastAPI + Next.js",
    company: "Cicada Technologies",
    location: "Cluj-Napoca, Romania",
    points: [
      "Delved deeper into React.js and Next.js, expanding proficiency in frontend development",
      "Enhanced Python skills with hands-on experience in SQL queries and cron jobs on real-world management and custom software projects",
    ],
  },
  {
    date: "July 2022 - September 2022",
    role: "Frontend Intern",
    tech: "React.js",
    company: "3Pillar Global",
    location: "Cluj-Napoca, Romania",
    points: [
      "Acquired foundational skills in React.js and engaged with experienced professionals in an American corporate setting, fostering English communication and collaborative learning",
    ],
  },
];

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="experience-container"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="experience-cards">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-card"
            variants={fadeIn("up", "tween", index * 0.15, 0.5)}
          >
            <div className="exp-card-header">
              <div className="exp-card-left">
                <span className="exp-date">{exp.date}</span>
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-tech">{exp.tech}</span>
              </div>
              <div className="exp-card-right">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-location">{exp.location}</span>
              </div>
            </div>
            <div className="exp-card-body">
              {exp.points.map((point, i) => (
                <div key={i} className="exp-point">
                  <span className="exp-point-dot" />
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

export default Experience;
