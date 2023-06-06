import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Grant Licata, All rights reserved.</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/grant.licata/">
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Facebook account"
          />
        </Link>
        <Link href="https://www.instagram.com/grantlicata/">
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Instagram account"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/grantlicata/">
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Linkedin account"
          />
        </Link>
        <Link href="https://www.youtube.com/@grantlicata4493/featured">
          <Image
            src="/4.png"
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
