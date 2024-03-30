import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { CodeBracketIcon, EyeIcon } from "../icons";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className={styles.container}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className={styles.linkContainer}>
          <BrowserRouter>
            <Link to={gitUrl} className={styles.linkGit}>
              <CodeBracketIcon className={styles.icon} />
            </Link>
            <Link to={previewUrl} className={styles.linkUrl}>
              <EyeIcon className={styles.icon} />
            </Link>
          </BrowserRouter>
        </div>
      </div>
      <div className={styles.textContainer}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
