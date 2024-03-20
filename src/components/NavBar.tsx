import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import { BrowserRouter, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./i18n/LanguageSelector";
import styles from "../scss/NavBar.module.scss";
import "./i18n";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navBar}>
      <label className={styles.icon} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img src={closeIcon} alt="Cerrar" />
        ) : (
          <img src={menuIcon} alt="Menú" />
        )}
      </label>

      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <nav
        className={`${styles.menuContainer} ${isMenuOpen ? styles.show : ""}`}
      >
        <BrowserRouter>
          <ul className={styles.menu}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                {t("NavBar.Home")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                {t("NavBar.About")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t("NavBar.Contact")}
              </Link>
            </li>
          </ul>
        </BrowserRouter>
      </nav>
      <div className={styles.languageSelectorContainer}>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default NavBar;
