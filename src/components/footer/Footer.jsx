import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/1.png";
import Instagram from "public/2.png";
import LinkedIn from "public/3.png";
import YouTube from "public/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Grant Licata, All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/grant.licata/">
          <Image
            src={Facebook}
            width={15}
            height={15}
            className={styles.icon}
            alt="Facebook account"
          />
        </Link>
        <Link href="https://www.instagram.com/grantlicata/">
          <Image
            src={Instagram}
            width={15}
            height={15}
            className={styles.icon}
            alt="Instagram account"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/grantlicata/">
          <Image
            src={LinkedIn}
            width={15}
            height={15}
            className={styles.icon}
            alt="Linkedin account"
          />
        </Link>
        <Link href="https://www.youtube.com/@grantlicata4493/featured">
          <Image
            src={YouTube}
            width={15}
            height={15}
            className={styles.icon}
            alt="Youtube account"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
