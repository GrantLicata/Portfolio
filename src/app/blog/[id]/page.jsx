import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  // 100 randomized posts will be returned from the JSON placeholder API
  // Fetch functions automatic caching to be removed to allow for data update upon new renders
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const Post = async ({ params }) => {
  // Data gathered from API call and assigned to data variable
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>Description</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Username</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          voluptas, necessitatibus quas temporibus quia veniam maiores
          voluptatem enim, corporis, deserunt aperiam vitae ullam ipsum aliquid
          modi repellendus vero sunt nesciunt.
        </p>
      </div>
    </div>
  );
};

export default Post;
