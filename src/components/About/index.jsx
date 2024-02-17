import "./About.scss";

import React from "react";

import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Tooltip } from "@mui/material";

import ResumePDF from "../../assets/files/ResumePDF.pdf";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-wrapper">
        <div className="image-section">
          <div className="info-image"></div>
          <div className="quote-section">
            "Do the best you can until you know better. Then when you know
            better, do better.", Maya Angelou
          </div>
        </div>
        <div className="info-data">
          <div className="name-section">
            <span>Hi, my name is </span>
            <br />
            <span className="name">Zimbru Grigore Florin</span>
          </div>
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Databases Master's Student",
              2000,
              "",
            ]}
            speed={30}
            wrapper="h2"
            repeat={Infinity}
            className="type-animation"
          />
          <div className="info-buttons-section">
            <a href="#contact" className="info-contact-button">
              <span> Contact Me</span>
            </a>
            <a href={ResumePDF} className="info-download-button" download>
              <div className="download-resume-button">
                <span>Resume</span> <FiDownload className="download-icon" />
              </div>
            </a>
          </div>
          <div className="media-buttons-wrapper">
            <ul className="social-media-buttons">
              <li>
                <Tooltip title="Github">
                  <a href="https://github.com/Florin14">
                    <AiFillGithub className="social-media-icon" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="LinkedIn">
                  <a href="https://www.linkedin.com/in/grigore-florin-zimbru-513706203/">
                    <FaLinkedinIn className="social-media-icon" />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Instagram">
                  <a href="https://www.instagram.com/florin.zimbru/">
                    <AiFillInstagram className="social-media-icon " />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Facebook">
                  <a href="https://www.facebook.com/zimbru.florin.3/">
                    <FaFacebook className="social-media-icon " />
                  </a>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Twitter">
                  <a href=" https://twitter.com/FlorinZimbru">
                    <FaXTwitter className="social-media-icon " />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
