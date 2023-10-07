import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";

const getData = async () => {
  const res = await fetch(
    "https://blog-grantlicata.vercel.app/api/posts/popular",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuPosts = async () => {
  const data = await getData();

  return (
    <div className={styles.items}>
      {data?.map((item) => (
        <Link key={item.id} href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.catSlug]}`}>
              {item.catSlug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.date}>
                {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
