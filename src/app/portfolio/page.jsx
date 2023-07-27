"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";
import Github from "public/github.png";
import { ThemeContext } from "../../context/ThemeContext";

const getData = () => {
  const data = items.applications;
  if (data) {
    return data;
  }
  return notFound();
};

const Portfolio = () => {
  // Dark vs light mode theme context
  const { toggle, mode } = useContext(ThemeContext);
  const data = getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>Applications</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.desc}</p>
            <div className={styles.selection}>
              {item.live ? (
                <Button text="Visit The App" url={item.url} />
              ) : (
                <Link href={item.url}>
                  <button className={styles.inDevelopmentButton}>
                    In Development
                  </button>
                </Link>
              )}
              <Link href={item.gitHub}>
                <Image
                  src={Github}
                  className={
                    mode === "light"
                      ? styles.githubLightMode
                      : styles.githubDarkMode
                  }
                  alt="Github icon"
                />
              </Link>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
              src={item.image}
              sizes="max-width: 598px, max-height: 500px"
              alt="project image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
