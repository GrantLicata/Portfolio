"use client";

import Link from "next/link";
import React, { useContext } from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import { ThemeContext } from "@/context/ThemeContext";

const getEmployment = () => {
  const data = items.experience;
  if (data) {
    return data;
  }
  return notFound();
};

const getEducation = () => {
  const data = items.education;
  if (data) {
    return data;
  }
  return notFound();
};

const getCertifications = () => {
  const data = items.certifications;
  if (data) {
    return data;
  }
  return notFound();
};

const Experience = () => {
  const { toggle, mode } = useContext(ThemeContext);
  const employment = getEmployment();
  const education = getEducation();
  const certifications = getCertifications();

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>My Experience</h1>
      <div className={styles.experience}>
        <h2 className={styles.categoryTitle}>Employment</h2>
        <div className={styles.list}>
          {employment.map((item) => (
            <div
              className={mode === "dark" ? styles.item : styles.lightModeItem}
              key={item.id}
            >
              <div className={styles.cardLeft}>
                <p className={styles.dates}>
                  {item.year_start} - {item.year_end}
                </p>
              </div>
              <div className={styles.cardRight}>
                <p
                  className={
                    mode === "dark"
                      ? styles.cardTitle
                      : styles.lightModeCardTitle
                  }
                >
                  {item.title} &bull;{" "}
                  <Link
                    className={
                      mode === "dark" ? styles.link : styles.lightModeLink
                    }
                    href={item.employer_url}
                  >
                    {item.employer}
                  </Link>
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={styles.categoryTitle}>Education</h2>
        <div className={styles.list}>
          {education.map((item) => (
            <div
              className={mode === "dark" ? styles.item : styles.lightModeItem}
              key={item.id}
            >
              <div className={styles.cardLeft}>
                <p className={styles.dates}>
                  {item.year_start} - {item.year_end}
                </p>
              </div>
              <div className={styles.cardRight}>
                <p
                  className={
                    mode === "dark"
                      ? styles.cardTitle
                      : styles.lightModeCardTitle
                  }
                >
                  {item.degree} &bull;{" "}
                  <Link
                    className={
                      mode === "dark" ? styles.link : styles.lightModeLink
                    }
                    href={item.school_url}
                  >
                    {item.school}
                  </Link>
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={styles.categoryTitle}>Certifications</h2>
        <div className={styles.list}>
          {certifications.map((item) => (
            <div
              className={mode === "dark" ? styles.item : styles.lightModeItem}
              key={item.id}
            >
              <div className={styles.cardLeft}>
                <p className={styles.dates}>
                  {item.year_start} - {item.year_end}
                </p>
              </div>
              <div className={styles.cardRight}>
                <p className={styles.titleAndEmployer}>
                  {item.title} &bull;{" "}
                  <Link
                    className={
                      mode === "dark" ? styles.link : styles.lightModeLink
                    }
                    href={item.organization_url}
                  >
                    {item.organization}
                  </Link>
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
