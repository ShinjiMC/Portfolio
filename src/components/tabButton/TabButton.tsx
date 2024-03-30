import React from "react";
import { motion } from "framer-motion";
import styles from "./TabButton.module.scss";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  const buttonClasses = active ? styles.textWhite : styles.textADB7BE;

  return (
    <button onClick={selectTab} className={styles.btn}>
      <p className={`${styles.name} ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={styles.motion}
      ></motion.div>
    </button>
  );
};

export default TabButton;
