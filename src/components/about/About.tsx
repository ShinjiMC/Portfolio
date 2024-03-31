import React, { useState, useTransition } from "react";
import { Logo } from "../icons";
import TabButton from "../tabButton/TabButton";
import styles from "./About.module.scss";
import { useTranslation } from "react-i18next";
import "../i18n";

const About: React.FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

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
          <li>{t("TABDATA.ed1")}</li>
          <li>{t("TABDATA.ed2")}</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className={styles.list}>
          <li>{t("TABDATA.cert1")}</li>
          <li>{t("TABDATA.cert2")}</li>
          <li>{t("TABDATA.cert3")}</li>
          <li>{t("TABDATA.cert4")}</li>
          <li>{t("TABDATA.cert5")}</li>
          <li>{t("TABDATA.cert6")}</li>
          <li>{t("TABDATA.cert7")}</li>
          <li>{t("TABDATA.cert8")}</li>
          <li>{t("TABDATA.cert9")}</li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={styles.about_container} id="about">
      <div className={styles.container}>
        <Logo className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.title}>{t("About.Title")}</h2>
          <p className={styles.text}>{t("About.Description")}</p>
          <div className={styles.flex_container}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              {t("About.Skills")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              {t("About.Education")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              {t("About.Certifications")}{" "}
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
