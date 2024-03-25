import React, { useState } from "react";
import { LinkedinIcon, GithubIcon } from "./icons";
import { Link, BrowserRouter } from "react-router-dom";
import styles from "../scss/EmailSection.module.scss";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    // Form the request for sending data to the server.
    const options: RequestInit = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
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
        {emailSubmitted ? (
          <p className={styles.success}>Email sent successfully!</p>
        ) : (
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div className={styles.subContainer}>
              <label htmlFor="email" className={styles.labelContainer}>
                Your email
              </label>
              <input
                name="email"
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
                name="subject"
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
        )}
      </div>
    </section>
  );
};

export default EmailSection;
