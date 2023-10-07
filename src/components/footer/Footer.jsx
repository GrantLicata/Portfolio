import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Facebook from "public/facebook_icon.png";
import Instagram from "public/instagram_icon.png";
import LinkedIn from "public/linkedin_icon.png";
import YouTube from "public/youtube_icon.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Grant Licata, All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/grant.licata/">
          <Image
            src={Facebook}
            w={15}
            h={15}
            q={100}
            className={styles.icon}
            alt="Facebook account"
          />
        </Link>
        <Link href="https://www.instagram.com/grantlicata/">
          <Image
            src={Instagram}
            w={15}
            h={15}
            q={100}
            className={styles.icon}
            alt="Instagram account"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/grantlicata/">
          <Image
            src={LinkedIn}
            w={15}
            h={15}
            q={100}
            className={styles.icon}
            alt="Linkedin account"
          />
        </Link>
        <Link href="https://www.youtube.com/@grantlicata4493/featured">
          <Image
            src={YouTube}
            w={15}
            h={15}
            q={100}
            className={styles.icon}
            alt="Youtube account"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
