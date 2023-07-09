import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Experience = () => {
  return (
    <div>
      <h1>Experience</h1>
      <p>This page will present my professional experience.</p>
      <p>
        The theme will follow a similar format to the one found at the link
        below...
      </p>
      <div className={styles.portfolioLink}>
        <Link href="https://brittanychiang.com/#experience">
          Brittany Chiang - Experience
        </Link>
      </div>
    </div>
  );
};

export default Experience;
