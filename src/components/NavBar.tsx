import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./i18n/LanguageSelector";
import { Logo, MenuOpenIcon, MenuCloseIcon } from "./icons";
import styles from "../scss/NavBar.module.scss";
import "./i18n";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
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
              <Logo color="white" className={styles.logo} />
            </span>
          </div>
          <ul
            className={
              click ? `${styles.nav_menu} ${styles.active}` : styles.nav_menu
            }
          >
            <BrowserRouter>
              <li className={styles.nav_item}>
                <Link to="/" onClick={handleClick}>
                  {t("NavBar.Home")}
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link to="/about" onClick={handleClick}>
                  {t("NavBar.About")}
                </Link>
              </li>
              <li className={styles.nav_item}>
                <Link to="/contact" onClick={handleClick}>
                  {t("NavBar.Contact")}
                </Link>
              </li>
              <li className={`${styles.nav_item} ${styles.disabled}`}>
                <LanguageSelector />
              </li>
            </BrowserRouter>
          </ul>
          <div className={styles.nav_icon} onClick={handleClick}>
            {click ? (
              <span className={styles.icon}>
                <MenuCloseIcon color="white" height="30" />
              </span>
            ) : (
              <span className={styles.icon}>
                <MenuOpenIcon color="white" height="30" />
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
