import "./WorkCard.scss";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";

import LaunchIcon from "@mui/icons-material/Launch";

import { projectsData } from "../../utils/data";
import { fadeIn } from "../../utils/motion";

export const WorkCard = () => {
  return (
    <>
      {projectsData?.map((data, index) => {
        return (
          <motion.div
            key={data.id}
            className="projects-section-card"
            variants={fadeIn("up", "tween", 0.1 + index * 0.1, 0.5)}
          >
            <div className="projects-section-img-content">
              <div className="projects-section-image-container">
                <img
                  src={data?.img}
                  alt={data?.title}
                  className="projects-section-image"
                />
              </div>
              <div className="projects-section-popup">
                <div className="projects-section-links">
                  {data?.link && (
                    <Link
                      to={data?.link}
                      target="_blank"
                      className="projects-section-link"
                    >
                      <LaunchIcon className="projects-section-icon" />
                      <p className="projects-section-link-text">Demo</p>
                    </Link>
                  )}
                  <Link
                    to={data?.git}
                    target="_blank"
                    className="projects-section-link"
                  >
                    <AiOutlineGithub className="projects-section-icon" />
                    <p className="projects-section-link-text">Code</p>
                  </Link>
                </div>
                {data?.desc && (
                  <p className="projects-section-description">{data?.desc}</p>
                )}
              </div>
            </div>
            <p className="projects-section-title">{data?.title}</p>
            {data?.tags && (
              <div className="projects-section-tags">
                {data.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </>
  );
};
