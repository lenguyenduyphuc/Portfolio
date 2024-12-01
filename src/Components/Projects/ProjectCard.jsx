import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, demo },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`${title} project thumbnail`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
          {demo && (
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
