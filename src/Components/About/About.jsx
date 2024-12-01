import React from 'react'

import styles from "./About.module.css"
import {getImageUrl} from "../../utils"

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img className={styles.mouse} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I am working on developing frontend with React
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img className={styles.database} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I am working on developing backend for websites with database, api and frameworks
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img className={styles.database} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Neural Network and LLM Agent Research</h3>
                <p>
                  I am researching with my professor on Neural Networking and LLM Agents
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };