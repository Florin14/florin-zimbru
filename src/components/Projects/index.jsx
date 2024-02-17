import "./Projects.scss";

import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { WorkCard } from "../../layout/WorkCard";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Projects = () => {
  return (
    <motion.div id="projects" className="projects-container">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="projects-wrapper"
      >
        <div className="projects-title-section">
          <div className="projects-title-bar"></div>
          <div className="projects-title">Projects</div>
          <div className="projects-title-bar"></div>
        </div>
        <motion.div
          className="projects-subtitle"
          variants={fadeIn("down", "tween", 0.5, 0.6)}
        >
          Here are some of my projects
        </motion.div>
        <div className="projects-card-wrapper">
          <WorkCard />
        </div>
        <div className="projects-all-button">
          <Link to="https://github.com/Florin14" className="projects-all">
            Check out all my projects
            <ArrowForwardIcon className="arrowright-icon" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
