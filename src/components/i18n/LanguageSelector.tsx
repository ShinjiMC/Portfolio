import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../scss/i18n.module.scss";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  return (
    <div className={styles.language_selector}>
      <div>
        <button
          type="button"
          className={styles.button_main}
          id="options-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {languages.find((lang) => lang.code === selectedLanguage)?.label}{" "}
          <svg
            className={styles.dropdown_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className={styles.dropdown_container}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={styles.dropdown_button}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
