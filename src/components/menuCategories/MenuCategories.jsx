import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=lifestyle"
        className={`${styles.categoryItem} ${styles.lifestyle}`}
      >
        Lifestyle
      </Link>
      <Link
        href="/blog?cat=business"
        className={`${styles.categoryItem} ${styles.business}`}
      >
        Business
      </Link>
      <Link
        href="/blog?cat=product"
        className={`${styles.categoryItem} ${styles.product}`}
      >
        Product
      </Link>
      <Link
        href="/blog?cat=travel"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        Books
      </Link>
      <Link
        href="/blog?cat=coding"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
