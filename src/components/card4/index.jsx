import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import styles from "./card4.module.css";
export const Card4 = () => {
  return (
    <>
      <div className={styles.card}>
        <BsCheckCircle className={styles.card__icon} />
        <h1 className={styles.card__title}>HI, I'M CARD 4!</h1>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic ipsam.
        </p>
        <button className={styles.card__button}>Go to dashboard</button>
      </div>
    </>
  );
};
