import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = () => {
  const data = items.experience;
  if (data) {
    return data;
  }
  return notFound();
};

const Experience = () => {
  const data = getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>My Experience</h1>
      <h2 className={styles.categoryTitle}>Employment</h2>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.cardLeft}>
            <p>
              {item.year_start} - {item.year_end}
            </p>
          </div>
          <div className={styles.cardRight}>
            <p>
              {item.title} - {item.employer}
            </p>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
