import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuItemsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Scroll animation
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          gsap.to(navRef.current, {
            backgroundColor: "rgba(19, 21, 26, 0.95)",
            backdropFilter: "blur(10px)",
            duration: 0.3,
          });
        } else {
          gsap.to(navRef.current, {
            backgroundColor: "transparent",
            backdropFilter: "blur(0px)",
            duration: 0.3,
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (menuOpen && menuItemsRef.current) {
      gsap.from(menuItemsRef.current.children, {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [menuOpen]);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className={`${styles.menuIcon} ${menuOpen ? styles.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <ul
          ref={menuItemsRef}
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={styles.menuItem}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
