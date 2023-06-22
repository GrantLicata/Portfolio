import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            corporis consequatur molestiae delectus blanditiis quas eligendi in
            iste! Vero ratione facilis quaerat quibusdam dolores qui excepturi
            quam inventore numquam laboriosam!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            corporis consequatur molestiae delectus blanditiis quas eligendi in
            iste! Vero ratione facilis quaerat quibusdam dolores qui excepturi
            quam inventore numquam laboriosam!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>About My Work?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            sapiente, ipsa dolore officia pariatur aliquam id nobis odio, minus
            explicabo, dicta dolorem voluptates ducimus illo molestiae molestias
            iste culpa doloremque.
            <br />
            <br /> - Project Management
            <br />
            <br /> - Software Development
            <br />
            <br /> - Product Design
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
