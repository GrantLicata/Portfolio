"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { ThemeContext } from "../../context/ThemeContext";
import Image from "next/image";
import Menu from "public/menu.png";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "Experience",
    url: "/experience",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  // Dark vs light mode theme context
  const { toggle, mode } = useContext(ThemeContext);
  // Responsive menu state
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleMenu = () => {
    if (isCollapsed === false) {
      setIsCollapsed(true);
      console.log("Menu closed");
    } else {
      setIsCollapsed(false);
      console.log("Menu opened");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Hi, I&apos;m Grant.
        </Link>
        <div className={styles.navRight}>
          <div className={styles.interactives}>
            <Image
              src={Menu}
              className={mode === "light" ? styles.menuLight : styles.menuDark}
              onClick={toggleMenu}
              alt="button for navigation options"
            />
            <DarkModeToggle />
          </div>
          <div className={isCollapsed === true ? styles.links : styles.hidden}>
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className={
                  mode === "light" ? styles.lightModeLink : styles.darkModeLink
                }
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.mobileList}>
        <div
          className={isCollapsed === true ? styles.hidden : styles.pattyLinks}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={
                mode === "light" ? styles.lightModeLink : styles.darkModeLink
              }
              onClick={() => setIsCollapsed(true)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
