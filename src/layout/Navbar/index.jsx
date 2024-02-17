import "./Navbar.scss";

import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

import sigla from "../../assets/img/Sigla.png";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import { ContactButton } from "../ContactButton";

const Navbar = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth > 770) {
        setMenuOpened(false);
      }
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`wrapper ${scrollPosition > 0 ? "scroll-position" : ""}`}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className={`container`}>
        <div className="logo">
          <a href="#about">
            <img src={sigla} alt="navbar-logo" className="navbar-logo"></img>
          </a>
        </div>
        <ul
          className={`${
            windowWidth > 770
              ? "menu"
              : `small-menu ${menuOpened ? "open" : "closed"}`
          }`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a
              href="#about"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              Projects
            </a>
          </li>
          <ContactButton />
        </ul>
        <div
          className={"menuIcon"}
          onClick={() => {
            menuOpened
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "");
            setMenuOpened((prev) => !prev);
          }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
