import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt=""
            width="24"
            height="24"
          />
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
