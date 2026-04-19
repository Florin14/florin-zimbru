/* eslint-disable react/prop-types */
import "./WorkCard.scss";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";

import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

import { fadeIn } from "../../utils/motion";
import { createPlaceholderImage } from "../../utils/data";

/**
 * Maps a project status to the badge label and the modifier class used for
 * coloring. Keeps copy + styling in one place so cards stay consistent.
 */
const STATUS_META = {
  live: { label: "Live", modifier: "is-live" },
  github: { label: "Code only", modifier: "is-github" },
};

/**
 * Collects every available GitHub link for a project. Supports either a
 * single repo (`githubUrl`) or split frontend/backend repos
 * (`githubFrontendUrl` + `githubBackendUrl`). Returns an array of
 * `{ key, href, label }` descriptors so the action builder can decide
 * variant + ordering without re-deriving them.
 */
const collectGithubLinks = (project) => {
  const { githubUrl, githubFrontendUrl, githubBackendUrl } = project;
  const links = [];

  if (githubFrontendUrl) {
    links.push({
      key: "github-fe",
      href: githubFrontendUrl,
      label: "Frontend",
    });
  }
  if (githubBackendUrl) {
    links.push({
      key: "github-be",
      href: githubBackendUrl,
      label: "Backend",
    });
  }

  // Fall back to the legacy single-repo field only when no split repos
  // were provided — never duplicate the same link under two labels.
  if (links.length === 0 && githubUrl) {
    links.push({ key: "github", href: githubUrl, label: "GitHub" });
  }

  return links;
};

/**
 * Builds the list of CTAs for a project. Returns an array of action
 * descriptors so the card can render them generically. Falls back gracefully
 * when the canonical URL for a status is missing — never returns a broken or
 * disabled button.
 */
const getActionsForProject = (project) => {
  const { status, liveUrl } = project;
  const githubLinks = collectGithubLinks(project);
  const actions = [];

  switch (status) {
    case "live": {
      if (liveUrl) {
        actions.push({
          key: "live",
          href: liveUrl,
          label: "Live demo",
          variant: "primary",
          Icon: LaunchIcon,
        });
      }
      githubLinks.forEach((link) => {
        actions.push({
          key: link.key,
          href: link.href,
          label: link.label,
          // Promote the first GitHub link to primary if there's no live URL.
          variant: actions.length === 0 ? "primary" : "secondary",
          Icon: AiOutlineGithub,
        });
      });
      break;
    }
    case "github": {
      if (githubLinks.length === 0) break;
      // Single fullstack repo → friendly "View code" label.
      // Split repos → keep their distinct labels and promote the first one.
      if (githubLinks.length === 1 && githubLinks[0].label === "GitHub") {
        actions.push({
          key: "code",
          href: githubLinks[0].href,
          label: "View code",
          variant: "primary",
          Icon: CodeIcon,
        });
      } else {
        githubLinks.forEach((link, i) => {
          actions.push({
            key: link.key,
            href: link.href,
            label: link.label,
            variant: i === 0 ? "primary" : "secondary",
            Icon: AiOutlineGithub,
          });
        });
      }
      break;
    }
    default:
      break;
  }

  return actions;
};

const isExternal = (href) => /^https?:\/\//i.test(href);

const ActionButton = ({ action, projectTitle }) => {
  const { href, label, variant, Icon } = action;
  const external = isExternal(href);
  const ariaLabel = `${label} — ${projectTitle}`;

  return (
    <a
      className={`project-card__action project-card__action--${variant}`}
      href={href}
      aria-label={ariaLabel}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {Icon && <Icon className="project-card__action-icon" aria-hidden="true" />}
      <span>{label}</span>
    </a>
  );
};

export const ProjectCard = ({ project, index = 0 }) => {
  const meta = STATUS_META[project.status] ?? STATUS_META.github;
  const actions = getActionsForProject(project);

  // Combine the main image + gallery into a single ordered list. We always
  // guarantee at least one entry by falling back to a generated placeholder,
  // so the media block never collapses or shows a broken image.
  const images = useMemo(() => {
    const fallback = createPlaceholderImage(project.title);
    const collected = [project.image, ...(project.gallery ?? [])].filter(
      Boolean
    );
    return collected.length > 0 ? collected : [fallback];
  }, [project.image, project.gallery, project.title]);

  const [activeImage, setActiveImage] = useState(0);
  const altText = project.imageAlt ?? `Preview image for ${project.title}`;
  const hasGallery = images.length > 1;

  // Hover-cycle: as the pointer moves horizontally across the cover image,
  // map its X position to a gallery slot. This is the Vercel/Linear pattern
  // — much more modern than dot pagination.
  const updateFromPointer = (event) => {
    if (!hasGallery) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = Math.max(
      0,
      Math.min(1, (event.clientX - rect.left) / rect.width)
    );
    const next = Math.min(images.length - 1, Math.floor(ratio * images.length));
    if (next !== activeImage) setActiveImage(next);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    updateFromPointer(event);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType !== "touch") return;
    updateFromPointer(event);
  };

  const handlePointerLeave = () => {
    if (hasGallery) setActiveImage(0);
  };

  const handleImageError = (event) => {
    // Replace once with a placeholder; data URIs cannot fail so this is
    // guaranteed to break the loop.
    const target = event.currentTarget;
    const placeholder = createPlaceholderImage(project.title);
    if (target.src !== placeholder) target.src = placeholder;
  };

  return (
    <motion.article
      className="project-card"
      variants={fadeIn("up", "tween", 0.05 + index * 0.06, 0.45)}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
      layout
    >
      <div
        className={`project-card__media${hasGallery ? " has-gallery" : ""}`}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerLeave={handlePointerLeave}
      >
        <div className="project-card__media-stage">
          {images.map((src, i) => (
            <img
              key={`${project.id}-${i}`}
              src={src}
              alt={i === 0 ? altText : `${altText} — view ${i + 1}`}
              loading="lazy"
              draggable={false}
              className={`project-card__media-img${
                i === activeImage ? " is-active" : ""
              }`}
              onError={handleImageError}
            />
          ))}
        </div>

        {hasGallery && (
          <div
            className="project-card__media-segments"
            role="presentation"
            aria-hidden="true"
          >
            {images.map((_, i) => (
              <span
                key={i}
                className={`project-card__media-segment${
                  i === activeImage ? " is-active" : ""
                }`}
              />
            ))}
          </div>
        )}

        {hasGallery && (
          <span className="project-card__media-counter" aria-hidden="true">
            {String(activeImage + 1).padStart(2, "0")}
            <span className="project-card__media-counter-sep">/</span>
            {String(images.length).padStart(2, "0")}
          </span>
        )}
      </div>

      <header className="project-card__header">
        <div className="project-card__meta">
          {project.year && (
            <span className="project-card__year">{project.year}</span>
          )}
          {project.role && (
            <>
              <span className="project-card__meta-dot" aria-hidden="true">
                •
              </span>
              <span className="project-card__role">{project.role}</span>
            </>
          )}
        </div>
        <span
          className={`project-card__badge project-card__badge--${meta.modifier}`}
        >
          {meta.label}
        </span>
      </header>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      {project.highlights?.length > 0 && (
        <ul className="project-card__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {project.stack?.length > 0 && (
        <ul className="project-card__stack" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="project-card__stack-item">
              {tech}
            </li>
          ))}
        </ul>
      )}

      <footer className="project-card__footer">
        {actions.length > 0 && (
          <div className="project-card__actions">
            {actions.map((action) => (
              <ActionButton
                key={action.key}
                action={action}
                projectTitle={project.title}
              />
            ))}
          </div>
        )}
      </footer>
    </motion.article>
  );
};

// Backwards-compat alias — `Projects/index.jsx` historically imported `WorkCard`.
export const WorkCard = ProjectCard;
