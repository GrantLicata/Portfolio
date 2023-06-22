import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  // const res = await fetch(`http://grantlicata.com/api/posts`, {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });
  console.log("This is the response", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// // Testing Function
// const getTestData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   console.log("Database get request response:", res);
//   if (!res.ok) {
//     setError(true);
//   }
//   return res.json();
// };

export const metadata = {
  title: "Blog",
  description: "Your source for all my blog content",
};

const Blog = async () => {
  // Data gathered from API call and assigned to data variable
  // const data = await getData();

  // Testing variable
  // const data = await getTestData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
