import React from "react";
import { Logo } from "../icons";
import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";
import "../i18n";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>
          <Logo color="white" className={styles.logo} />
        </span>
        <p className={styles.text}>{t("Footer")}</p>
      </div>
    </footer>
  );
};

export default Footer;
