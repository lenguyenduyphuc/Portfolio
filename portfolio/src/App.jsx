import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/hero";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;