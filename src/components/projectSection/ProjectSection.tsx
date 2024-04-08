import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ProjectTag from "../projectTag/ProjectTag";
import ProjectCard from "../projectCard/ProjectCard";
import styles from "./ProjectSection.module.scss";
import { useTranslation } from "react-i18next";
import "../i18n";

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      title: t("ProjectData.title1"),
      description: t("ProjectData.desc1"),
      image: "./images/projects/1.png",
      tag: ["All", "Web", "Mobile"],
      gitUrl: "https://github.com/ShinjiMC/Portfolio",
      previewUrl: "https://shinjimc.github.io/Portfolio/",
    },
    {
      id: 2,
      title: t("ProjectData.title2"),
      description: t("ProjectData.desc2"),
      image: "./images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/ShinjiMC/Spring_Security_Thymeleaf",
      previewUrl: "",
    },
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className={styles.title}>{t("Project.Title")}</h2>
      <div className={styles.tags}>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          text={t("Project.All")}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
          text={t("Project.Web")}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
          text={t("Project.Mobile")}
        />
      </div>
      <ul ref={ref} className={styles.projects}>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
