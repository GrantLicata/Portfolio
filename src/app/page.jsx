import Image from "next/image";
import styles from "./page.module.css";
import Developer from "public/developer_hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Lead.
          <br /> Design.
          <br /> Develop.
        </h1>
        <p className={styles.description}>
          Unlocking the Power of Seamless Project Management, Inspired Design,
          and Cutting-Edge Software Development
        </p>
        <Button url="/portfolio" text="See My Work" />
      </div>
      <div className={styles.item}>
        <Image src={Developer} alt="hero" className={styles.image} />
      </div>
    </div>
  );
}
