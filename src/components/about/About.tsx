import React, { useState, useTransition } from "react";
import { Logo } from "../icons";
import TabButton from "../tabButton/TabButton";
import styles from "./About.module.scss";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={styles.list}>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Java</li>
        <li>C/C++</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.list}>
        <li>Fullstack Academy of Code</li>
        <li>University of Saint Agustin of Arequipa, Perú</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className={styles.list}>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={styles.about_container} id="about">
      <div className={styles.container}>
        <Logo color="white" className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.text}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className={styles.flex_container}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className={styles.find}>
            {TAB_DATA.find((t) => t.id === tab)?.content ?? null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
