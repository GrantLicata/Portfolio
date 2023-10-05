import Image from "next/image";
import styles from "./page.module.css";
import Developer from "public/developer_hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Hi, I&apos;m Grant.</h1>
        <p className={styles.description}>
          A Project Manager and Software Developer. Here you&apos;ll find a
          curated collection of my experiences, projects, and insights, all
          designed to give you a deeper look into my world.
        </p>
        <Button url="/portfolio" text="See My Work" />
      </div>
      <div className={styles.item}>
        <Image
          src={Developer}
          q={100}
          alt="Me sitting at a desk"
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}
