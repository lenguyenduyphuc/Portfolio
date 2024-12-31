import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const itemsRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      })
        .from(
          imageRef.current,
          {
            x: -100,
            opacity: 0,
            duration: 1,
            rotate: -10,
          },
          "-=0.5"
        )
        .from(
          itemsRef.current.children,
          {
            x: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.5"
        );

      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container} id="about">
      <div ref={contentRef}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I am a passionate full-stack developer with a love for learning and
          creating innovative solutions. My journey in tech has equipped me with
          a diverse skill set and a problem-solving mindset.
        </p>
      </div>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul ref={itemsRef} className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              className={`${styles.itemIcon} floating-icon`}
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm experienced in building responsive and interactive web
                applications using modern frameworks like React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={`${styles.itemIcon} floating-icon`}
              src={getImageUrl("about/serverIcon.png")}
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop robust server-side applications, APIs, and database
                systems to power web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              className={`${styles.itemIcon} floating-icon`}
              src={getImageUrl("about/settingIcon.png")}
              alt="UI icon"
            />
            <div className={styles.aboutItemText}>
              <h3>AI Researcher and Enthusiast</h3>
              <p>
                I'm passionate about Large Language Models and building Deep
                Neural Network
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
