import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../../../assets/hero/about.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const imageBorderRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      // Initial state setup
      gsap.set([titleRef.current.children, contentRef.current.children, imageBorderRef.current], {
        opacity: 0,
        y: 50,
      });

      // Main animation sequence
      tl.fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      )
        .fromTo(
          contentRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          imageBorderRef.current,
          { scale: 0.8, opacity: 0, rotation: -10 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" },
          "-=0.8"
        );

      // Parallax scroll effect
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        animation: gsap.to(imageRef.current, {
          y: "30%",
          scale: 1.1,
          ease: "none",
        }),
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title}>
          <span className={styles.line1}>Hello world,</span>
          <br/>
          <span className={styles.line2}>I'm Nguyen Duy Phuc Le</span>
        </h1>
        <div ref={contentRef}>
          <p className={styles.description}>
            I am a growing fullstack developer who loves learning new things and
            making new connections. Please reach out if you want to know more
            about me.
          </p>
          <div className={styles.btnContainer}>
            <a
              href="mailto:duyphuclenguyen@gmail.com"
              className={styles.contactBtn}
              aria-label="Contact me via email"
            >
              Get in touch with me
            </a>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div ref={imageBorderRef} className={styles.imageBorder}>
          <img ref={imageRef} src={heroImage} alt="Hero portrait" className={styles.heroImg} />
        </div>
      </div>
      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};

export default Hero;