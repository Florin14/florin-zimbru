import "./Projects.scss";

import { useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ProjectCard } from "../../layout/WorkCard";
import { projectsData } from "../../utils/data";
import { fadeIn, staggerChildren } from "../../utils/motion";

const FILTERS = [
  { id: "all", label: "All", match: () => true },
  { id: "live", label: "Live", match: (p) => p.status === "live" },
  { id: "github", label: "GitHub", match: (p) => p.status === "github" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = useMemo(() => {
    const filter = FILTERS.find((f) => f.id === activeFilter) ?? FILTERS[0];
    return projectsData.filter(filter.match);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="projects-container"
      aria-labelledby="projects-heading"
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="projects-wrapper"
      >
        <div className="projects-title-section">
          <div className="projects-title-bar" aria-hidden="true"></div>
          <h2 id="projects-heading" className="projects-title">
            Projects
          </h2>
          <div className="projects-title-bar" aria-hidden="true"></div>
        </div>

        <motion.p
          className="projects-subtitle"
          variants={fadeIn("up", "tween", 0.1, 0.5)}
        >
          A selection of work — from open-source side projects to products
          built for clients and employers.
        </motion.p>

        <motion.div
          className="projects-filters"
          role="tablist"
          aria-label="Filter projects by availability"
          variants={fadeIn("up", "tween", 0.15, 0.5)}
        >
          <LayoutGroup id="projects-filters">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`projects-filter${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      className="projects-filter__pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="projects-filter__label">{filter.label}</span>
                </button>
              );
            })}
          </LayoutGroup>
        </motion.div>

        <div className="projects-card-wrapper" role="list">
          <LayoutGroup>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <div role="listitem" key={project.id}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </AnimatePresence>
          </LayoutGroup>
        </div>

        {visibleProjects.length === 0 && (
          <p className="projects-empty">
            Nothing here yet for this filter — check back soon.
          </p>
        )}

        <div className="projects-all-button">
          <Link
            to="https://github.com/Florin14"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-all"
          >
            Check out all my projects
            <ArrowForwardIcon className="arrowright-icon" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
