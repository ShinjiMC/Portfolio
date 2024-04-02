import React, { Suspense } from "react";
import styles from "./ArchievementSection.module.scss";
import { useTranslation } from "react-i18next";
import "../i18n";

const AnimatedNumbers = React.lazy(() => import("react-animated-numbers"));
const ArchievementSection: React.FC = () => {
  const { t } = useTranslation();
  const achievementsList = [
    {
      metric: t("Archievements.projects"),
      value: "50",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: t("Archievements.users"),
      value: "100",
    },
    {
      metric: t("Archievements.awards"),
      value: "2",
    },
    {
      metric: t("Archievements.years"),
      value: "5",
    },
  ];
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {achievementsList.map((achievement, index) => {
          return (
            <div key={index} className={styles.archievement}>
              <h2 className={styles.title}>
                {achievement.prefix}
                <Suspense>
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className={styles.value}
                    transitions={(index: number) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                  />
                </Suspense>
                {achievement.postfix}
              </h2>
              <p className={styles.metric}>{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArchievementSection;
