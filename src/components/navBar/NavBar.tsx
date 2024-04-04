import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../i18n/LanguageSelector";
import { Logo, MenuOpenIcon, MenuCloseIcon } from "../icons";
import styles from "./NavBar.module.scss";
import "../i18n";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleInternalNavigation = (sectionId: string) => {
    setClick(false);
    const section = document.querySelector(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.nav_container}>
          <div className={styles.selector}>
            <LanguageSelector />
          </div>
          <div className={styles.logo_container}>
            <span className={styles.text}>Portfolio</span>
            <span className={styles.icon}>
              <Logo className={styles.logo} />
            </span>
          </div>
          <ul
            className={
              click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
            }
          >
            <BrowserRouter>
              <li className={styles.nav_item}>
                <Link to="#" onClick={() => handleInternalNavigation("#home")}>
                  {t("NavBar.Home")}
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link to="#" onClick={() => handleInternalNavigation("#about")}>
                  {t("NavBar.About")}
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  to="#"
                  onClick={() => handleInternalNavigation("#projects")}
                >
                  {t("NavBar.Projects")}
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link
                  to="#"
                  onClick={() => handleInternalNavigation("#contact")}
                >
                  {t("NavBar.Contact")}
                </Link>
              </li>
              <li className={`${styles.nav_item} ${styles.disabled}`}>
                <LanguageSelector />
              </li>
            </BrowserRouter>
          </ul>
          <button className={styles.nav_icon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}>
                <MenuCloseIcon className={styles.iconMenu} />
              </span>
            ) : (
              <span className={styles.icon}>
                <MenuOpenIcon className={styles.iconMenu} />
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
