import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./App.module.css";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.from("body", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
