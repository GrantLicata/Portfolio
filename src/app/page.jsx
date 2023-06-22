import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Developer from "public/developer_hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your idea into reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See My Work" />
      </div>
      <div className={styles.item}>
        <Image src={Developer} alt="hero" className={styles.image} />
      </div>
    </div>
  );
}
