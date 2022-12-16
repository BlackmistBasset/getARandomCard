import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import img from "../../assets/card6-img.jpg";
import styles from "./card6.module.css";
export const Card6 = () => {
  return (
    <>
      <div className={styles.card}>
        <img src={img} alt="card 6" className={styles.card__img} />
        <h1 className={styles.card__title}>Hi, I'm Card 6!</h1>
        <div className={styles.card__item__container}>
          <div className={styles.card__item}>
            <p className={styles.card__item__text}>
              <AiOutlineStar /> 9.5/10
            </p>
          </div>
          <div className={styles.card__item}>
            <p className={styles.card__item__text}>Adventure</p>
          </div>
        </div>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, nisi
          qui natus commodi adipisci in recusandae blanditiis.
        </p>
      </div>
    </>
  );
};
