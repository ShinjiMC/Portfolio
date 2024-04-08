import React, { useState, useRef } from "react";
import { LinkedinIcon, GithubIcon } from "../icons";
import { Link, BrowserRouter } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./EmailSection.module.scss";
import { useTranslation } from "react-i18next";
import "../i18n";

const EmailSection: React.FC = () => {
  const { t } = useTranslation();
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oevdkoj",
        "template_yxcpg4c",
        form.current!,
        "59aFBJlVFNFY0cNLk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSubmitted(true);
          setTimeout(() => setEmailSubmitted(false), 4000);
        },
        (error) => {
          console.log(error.text);
          setShowErrorMessage(true);
          setTimeout(() => setShowErrorMessage(false), 4000);
        }
      );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.circle}></div>
      <div className={styles.container}>
        <h5 className={styles.title}>{t("Email.Title")}</h5>
        <p className={styles.desc}> {t("Email.Description")}</p>
        <div className={styles.socials}>
          <BrowserRouter>
            <Link to="https://github.com/ShinjiMC">
              <GithubIcon className={styles.icon} />
            </Link>
            <Link to="linkedin.com">
              <LinkedinIcon className={styles.icon} />
            </Link>
          </BrowserRouter>
        </div>
      </div>
      <div>
        {emailSubmitted && (
          <p className={styles.success}>{t("Email.success")}</p>
        )}
        {showErrorMessage && <p className={styles.error}>{t("Email.error")}</p>}
        <form
          ref={form}
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div className={styles.subContainer}>
            <label htmlFor="email" className={styles.labelContainer}>
              {t("Email.inputEmail")}
            </label>
            <input
              name="user_email"
              type="email"
              id="email"
              required
              className={styles.inputContainer}
              placeholder="jacob@google.com"
            />
          </div>
          <div className={styles.subContainer}>
            <label htmlFor="subject" className={styles.labelContainer}>
              {t("Email.inputSubject")}
            </label>
            <input
              name="user_name"
              type="text"
              id="subject"
              required
              className={styles.inputContainer}
              placeholder={t("Email.exampleSubject")}
            />
          </div>
          <div className={styles.subContainer}>
            <label htmlFor="message" className={styles.labelContainer}>
              {t("Email.inputMessage")}
            </label>
            <textarea
              name="message"
              id="message"
              className={styles.inputContainer}
              placeholder={t("Email.exampleMessage")}
            />
          </div>
          <button type="submit" className={styles.buttonContainer}>
            {t("Email.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
