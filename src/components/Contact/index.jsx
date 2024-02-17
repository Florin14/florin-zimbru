import React from "react";

import "./Contact.scss";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { IconButton } from "@mui/material";

import footerImg from "../../assets/img/footerImage.png";
import { ContactShape } from "../../layout/ContactShape";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Contact = () => {
  return (
    <motion.div id="contact" className="contact-container">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="contact-wrapper"
      >
        <div className="contact-title-section">
          <img src={footerImg} alt="Footer Img" className="contact-image" />
          <div className="contact-form-section">
            <motion.div
              className="contact-subtitle"
              variants={fadeIn("left", "tween", 0.5, 0.6)}
            >
              Get in touch
            </motion.div>
            <motion.div
              className="contact-title"
              variants={fadeIn("left", "tween", 0.7, 0.6)}
            >
              Contact me
            </motion.div>
            <motion.div
              className="contact-info-wrapper"
              variants={fadeIn("left", "tween", 0.9, 0.6)}
            >
              <a
                href="mailto:zimbru.florin.4@gmail.com"
                className="contact-info-container"
              >
                <IconButton className="icon-button">
                  <MailOutlineIcon className="mail-icon" />
                </IconButton>
                zimbru.florin.4@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/grigore-florin-zimbru-513706203/"
                className="contact-info-container"
              >
                <IconButton className="icon-button">
                  <FaLinkedinIn className="mail-icon" />
                </IconButton>
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
        <div className="contact-copyright">
          Copyright © 2024 Zimbru Grigore-Florin. All Rights Reserved.
        </div>
      </motion.div>
      <ContactShape />
    </motion.div>
  );
};

export default Contact;
