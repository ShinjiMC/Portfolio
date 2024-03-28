import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import EmailSection from "./components/EmailSection";
import AchievementSection from "./components/ArchievementSection";
import Footer from "./components/Footer";
import styles from "./scss/App.module.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.principal}>
        <Hero />
        <AchievementSection />
        <About />
        <Projects />
        <EmailSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
