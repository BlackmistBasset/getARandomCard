import React from "react";
import styles from "./card2.module.css";
import img from "../../assets/card2-img.jpg";

export const Card2 = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card__top__container}>
          <div className={styles.card__img__container}>
            <img src={img} alt="card 2" className={styles.card__img} />
          </div>
        </div>
        <div className={styles.card__bottom__container}>
          <h2 className={styles.card__title}>Hi! I'm card 2!</h2>
          <p className={styles.card__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            dolorum dolorem quae cum atque nesciunt.
          </p>
          <button className={styles.card__button}>View Profile</button>
        </div>
      </div>
    </>
  );
};
