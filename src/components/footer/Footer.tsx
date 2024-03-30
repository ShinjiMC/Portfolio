import React from "react";
import { Logo } from "../icons";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>
          <Logo color="white" className={styles.logo} />
        </span>
        <p className={styles.text}>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
