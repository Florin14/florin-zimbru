import "./About.scss";

import React from "react";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import ResumeZimbruGrigoreFlorin from "../../assets/files/ResumeZimbruGrigoreFlorin.pdf";
import { fadeIn, staggerChildren } from "../../utils/motion";

const About = () => {
  return (
    <div id="about" className="hero">
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />

      <motion.div
        className="hero__content"
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="hero__avatar-wrapper"
          variants={fadeIn("up", "tween", 0.1, 0.6)}
        >
          <div className="hero__avatar" />
          <div className="hero__status">
            <span className="hero__status-dot" />
            Available for work
          </div>
        </motion.div>

        <motion.div
          className="hero__text"
          variants={fadeIn("up", "tween", 0.25, 0.6)}
        >
          <span className="hero__greeting">Hi, my name is</span>
          <h1 className="hero__name">Zimbru Grigore Florin</h1>
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Databases Master's",
              2000,
              "",
            ]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
            className="hero__role"
          />
        </motion.div>

        <motion.p
          className="hero__quote"
          variants={fadeIn("up", "tween", 0.4, 0.6)}
        >
          "Do the best you can until you know better. Then when you know
          better, do better" — Maya Angelou
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeIn("up", "tween", 0.5, 0.6)}
        >
          <a href="#contact" className="hero__btn hero__btn--primary">
            Contact Me
          </a>
          <a href={ResumeZimbruGrigoreFlorin} className="hero__btn hero__btn--secondary" download>
            Resume <FiDownload className="hero__btn-icon" />
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          variants={fadeIn("up", "tween", 0.6, 0.6)}
        >
          <a href="https://github.com/Florin14" target="_blank" rel="noopener noreferrer" className="hero__social">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/grigore-florin-zimbru-513706203/" target="_blank" rel="noopener noreferrer" className="hero__social">
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
