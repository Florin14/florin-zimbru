import React from "react";

import "./Contact.scss";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { fadeIn, staggerChildren } from "../../utils/motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="contact-container"
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="contact-wrapper">
        <motion.div
          className="contact-header"
          variants={fadeIn("up", "tween", 0.1, 0.5)}
        >
          <span className="contact-subtitle">Get in touch</span>
          <h2 className="contact-title">Let's work together</h2>
          <p className="contact-desc">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <motion.div
          className="contact-cards"
          variants={fadeIn("up", "tween", 0.25, 0.5)}
        >
          <a
            href="mailto:zimbru.florin.4@gmail.com"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <MailOutlineIcon />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">Email</span>
              <span className="contact-card-value">zimbru.florin.4@gmail.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/grigore-florin-zimbru-513706203/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <FaLinkedinIn />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">LinkedIn</span>
              <span className="contact-card-value">Grigore-Florin Zimbru</span>
            </div>
          </a>

          <a
            href="https://github.com/Florin14"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-icon">
              <AiFillGithub />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-label">GitHub</span>
              <span className="contact-card-value">Florin14</span>
            </div>
          </a>
        </motion.div>

        <motion.div
          className="contact-footer"
          variants={fadeIn("up", "tween", 0.4, 0.5)}
        >
          Copyright © 2026 Zimbru Grigore-Florin. All Rights Reserved.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
