import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a href="mailto:duyphuclenguyen@gmail.com" aria-label="Email Nguyen Duy Phuc Le">
              duyphuclenguyen@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
            <a href="https://www.linkedin.com/in/duyphuclenguyen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile of Nguyen Duy Phuc Le">
              linkedin.com/in/duyphuclenguyen
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <a href="https://github.com/lenguyenduyphuc" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile of Nguyen Duy Phuc Le">
              github.com/lenguyenduyphuc
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
