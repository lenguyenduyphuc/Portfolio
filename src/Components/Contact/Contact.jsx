import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Add hover animations for links
      const links = containerRef.current.querySelectorAll(`.${styles.link}`);
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: "power2.in",
          });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className={styles.container} id="contact">
      <div className={styles.content} ref={contentRef}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:duyphuclenguyen@gmail.com">My Email</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
            <a
              href="https://www.linkedin.com/in/duyphuclenguyen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <a
              href="https://github.com/lenguyenduyphuc"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
