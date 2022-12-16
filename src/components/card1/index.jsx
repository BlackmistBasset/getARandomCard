import React from "react";

import styles from "./card1.module.css";
import img from "../../assets/card1-img.jpg";
export const Card1 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card1" className={styles.card__img} />
        <p className={styles.card__intro}>1 week ago</p>
        <h1 className={styles.card__title}>Hi, I'm Card 1!</h1>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nisi
          qui natus commodi adipisci in recusandae blanditiis.
        </p>
        <div className={styles.card__footer}>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>7m</h2>
            <p className={styles.item__subtitle}>READ</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>7152</h2>
            <p className={styles.item__subtitle}>VIEWS</p>
          </div>
          <div className={styles.card__footer__item}>
            <h2 className={styles.item__title}>21</h2>
            <p className={styles.item__subtitle}>COMMENTS</p>
          </div>
        </div>
      </div>
    </>
  );
};
