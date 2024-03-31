import React from "react";
import styles from "./ProjectTag.module.scss";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
  text: string;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
  text,
}) => {
  const buttonStyles = isSelected ? styles.btnSelected : styles.btn;
  return (
    <button
      className={`${buttonStyles} ${styles.btnContainer}`}
      onClick={() => onClick(name)}
    >
      {text}
    </button>
  );
};

export default ProjectTag;
