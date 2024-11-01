import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/hero";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import { Projects } from "./Components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;