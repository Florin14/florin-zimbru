import "./Navbar.scss";

import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

import sigla from "../../assets/img/Sigla.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["contact", "projects", "resume", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 770) setMenuOpened(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpened]);

  const closeMenu = () => setMenuOpened(false);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a href="#about" className="nav__logo" onClick={closeMenu}>
          <img src={sigla} alt="Logo" />
        </a>

        {/* Desktop */}
        <div className="nav__right">
          <ul className="nav__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? "is-active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav__cta">
            Contact
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="nav__toggle"
          onClick={() => setMenuOpened((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpened ? (
            <IoCloseOutline size={26} />
          ) : (
            <BiMenuAltRight size={26} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${menuOpened ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="nav__mobile-cta">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
