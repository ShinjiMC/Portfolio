import React, { useState, useRef } from "react";
import { LinkedinIcon, GithubIcon } from "../icons";
import { Link, BrowserRouter } from "react-router-dom";
import emailjs from "@emailjs/browser";
import styles from "./EmailSection.module.scss";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_oevdkoj",
        "template_yxcpg4c",
        form.current,
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
        <h5 className={styles.title}>Let&apos;s Connect</h5>
        <p className={styles.desc}>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
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
          <p className={styles.success}>Email sent successfully!</p>
        )}
        {showErrorMessage && (
          <p className={styles.error}>
            Failed to send email. Please try again.
          </p>
        )}
        <form
          ref={form}
          className={styles.formContainer}
          onSubmit={handleSubmit}
        >
          <div className={styles.subContainer}>
            <label htmlFor="email" className={styles.labelContainer}>
              Your email
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
              Subject
            </label>
            <input
              name="user_name"
              type="text"
              id="subject"
              required
              className={styles.inputContainer}
              placeholder="Just saying hi"
            />
          </div>
          <div className={styles.subContainer}>
            <label htmlFor="message" className={styles.labelContainer}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={styles.inputContainer}
              placeholder="Let's talk about..."
            />
          </div>
          <button type="submit" className={styles.buttonContainer}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
