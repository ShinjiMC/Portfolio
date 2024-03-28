import React, { Suspense } from "react";
import styles from "../scss/ArchievementSection.module.scss";

const AnimatedNumbers = React.lazy(() => import("react-animated-numbers"));

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementSection: React.FC = () => {
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

export default AchievementSection;
