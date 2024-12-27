import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import projects from "../../Data/projects.json";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

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

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }).from(
        projectsRef.current.children,
        {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className={styles.container} id="projects">
      <h2 ref={titleRef} className={styles.title}>
        Projects
      </h2>
      <div ref={projectsRef} className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
