import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import EmailSection from "./components/emailSection/EmailSection";
import ArchievementSection from "./components/archievementSection/ArchievementSection";
import Footer from "./components/footer/Footer";
import ProjectSection from "./components/projectSection/ProjectSection";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles.principal}>
        <Hero />
        <ArchievementSection />
        <About />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
