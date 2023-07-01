"use client";
import React, { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
// import Menu from "public/menu.png";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  // const [menuState, setMenuState] = useState(false);

  // const toggleMenu = () => {
  //   if (menuState === true) {
  //     setMenuState(false);
  //     console.log("Menu closed");
  //   } else {
  //     setMenuState(true);
  //     console.log("Menu opened");
  //   }
  // };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Hi, I&apos;m Grant.
      </Link>
      {/* <Image src={Menu} className={styles.menu} /> */}
      <div className={styles.links}>
        <DarkModeToggle />
        {/* Generate a list of navigation links using the "Links" list above */}
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
