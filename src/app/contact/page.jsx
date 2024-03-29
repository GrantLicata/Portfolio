"use client";

import React, { useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Conversation from "/public/conversation.png";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

const Contact = () => {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nwomeck",
        "template_rlhhmnm",
        form.current,
        "e1zOwqGnuMxbuWjqt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Your message has been sent!");
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Conversation}
            alt="Two people sitting st a desk talking"
            q={100}
            fill={true}
            sizes="max-width: 600px, max-height: 600px"
            className={styles.image}
          />
        </div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
