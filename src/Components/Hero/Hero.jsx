import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.line1}>Hello world,</span>
                    <br />
                    <span className={styles.line2}>I am Nguyen Duy Phuc Le</span>
                </h1>
                <p className={styles.description}>
                    I am a growing fullstack developer who loves learning new things and making new connections. Please reach out if you want to know more about me.
                </p>
                <div className={styles.btnContainer}>
                    <a href="mailto:duyphuclenguyen@gmail.com" className={styles.contactBtn}>
                        Get in touch with me
                    </a>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.imageBorder}>
                    <img
                        src={getImageUrl("hero/about.png")}
                        alt="Hero image of me"
                        className={styles.heroImg}
                    />
                </div>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
