import React from 'react'

import styles from "./Hero.module.css"
import {getImageUrl} from "../../utils"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 children className={styles.title}>
                    Hello everyone <br/>
                    I am Nguyen Duy Phuc Le
                </h1>
                <p className={styles.description}>
                    I am a growing fullstack developer that loving learning new things and making new connections. Please reach out if you want to know more about me
                </p>
                <a href="mailto:duyphuclenguyen@gmail.com" className={styles.contactBtn}>
                    Get in touch with me
                </a>
            </div>
            <img
                src={getImageUrl("hero/about.png")}
                alt="Hero image of me"
                className={styles.heroIm}
            />
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
}
