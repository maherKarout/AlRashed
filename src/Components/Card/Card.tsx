import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles["card-img"]}>
        <img src="" alt="" />
      </div>
      <div className={styles['text-content']}>
      <h2 className={styles.title}>البوابة الرقمية </h2>
      <p>هنا يوجد نص</p>
      <p>هنا يوجد نص</p>
      </div>
    </div>
  );
}

export default Card;
