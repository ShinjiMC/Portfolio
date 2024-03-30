import React from "react";
import styles from "./ProjectTag.module.scss";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({
  name,
  onClick,
  isSelected,
}) => {
  const buttonStyles = isSelected ? styles.btnSelected : styles.btn;
  return (
    <button
      className={`${buttonStyles} ${styles.btnContainer}`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
