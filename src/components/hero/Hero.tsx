import React from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link, BrowserRouter } from "react-router-dom";
import { Logo } from "../icons";
import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.principal_motion}
        >
          <h1 className={styles.title_container}>
            <span className={styles.greatting}>{t("Hero.Greatting")}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                t("Hero.Name"),
                1000,
                t("Hero.Dev1"),
                1000,
                t("Hero.Dev2"),
                1000,
                t("Hero.Dev3"),
                1000,
                t("Hero.Dev4"),
                1000,
                t("Hero.Dev5"),
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.text_container}>{t("Hero.Description")}</p>
          <div>
            <BrowserRouter>
              <Link to="/#contact" className={styles.contact_button}>
                {t("Hero.Hire")}
              </Link>
              <Link to="/" className={styles.cv_button}>
                <span className={styles.cv_text}>{t("Hero.Download")}</span>
              </Link>
            </BrowserRouter>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.motion_image}
        >
          <div className={styles.circle_img}>
            <Logo className={styles.logo} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
