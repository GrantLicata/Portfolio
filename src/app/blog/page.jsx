import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts`, {
    cache: "no-store",
  });
  console.log("This is the response", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  // Data gathered from API call and assigned to data variable
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link href="/blog/textId" className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
