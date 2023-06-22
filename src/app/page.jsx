import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Developer from "public/developer_hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Projects. Design. Development.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est quas
          ut, quasi pariatur, odit saepe odio nemo eveniet animi, quaerat dolor
          perferendis omnis velit? Perferendis dolores libero recusandae quia?
        </p>
        <Button url="/portfolio" text="See My Work" />
      </div>
      <div className={styles.item}>
        <Image src={Developer} alt="hero" className={styles.image} />
      </div>
    </div>
  );
}
