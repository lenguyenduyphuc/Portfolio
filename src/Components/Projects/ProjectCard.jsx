import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, source } = project;

  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
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
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
