import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
      }
    );

    // Skills animation
    gsap.fromTo(
      ".skill",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 75%",
        },
      }
    );

    // History items animation
    gsap.fromTo(
      ".historyItem",
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: historyRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.container} id="experience">
      <h2 ref={titleRef} className={styles.title}>
        Experience
      </h2>
      <div className={styles.content}>
        <div ref={skillsRef} className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={`${styles.skill} skill`}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul ref={historyRef} className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={`${styles.historyItem} historyItem`}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>
                    {historyItem.role}, <br /> {historyItem.organisation}
                  </h3>
                  <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
