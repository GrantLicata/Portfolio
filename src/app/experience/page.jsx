import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>My Experience</h1>
      <h2 className={styles.categoryTitle}>Employment</h2>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            {item.live ? (
              <Button text="Visit The App" url={item.url} />
            ) : (
              <Link href={item.gitHub}>
                <button className={styles.inDevelopmentButton}>
                  In Development
                </button>
              </Link>
            )}
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              sizes="max-width: 598px, max-height: 500px"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>

    // <div>
    //   <h1>Experience</h1>
    //   <p>This page will present my professional experience.</p>
    //   <p>
    //     The theme will follow a similar format to the one found at the link
    //     below...
    //   </p>
    //   <div className={styles.portfolioLink}>
    //     <Link href="https://brittanychiang.com/#experience">
    //       Brittany Chiang - Experience
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Experience;
