import React from "react";
import styles from "./card3.module.css";

import { BsInstagram } from "react-icons/bs";
export const Card3 = () => {
  return (
    <>
      <div className={styles.card}>
        <BsInstagram className={styles.card__icon} />
        <h1 className={styles.card__title}>HI, I'M CARD 3!</h1>
        <p className={styles.card__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic ipsam,
          ea ipsum cumque nam perferendis voluptate dignissimos fugit numquam
          facere dolorum quasi praesentium ad iusto nisi a vitae dolorem!
        </p>
        <button className={styles.card__button}>READ MORE</button>
      </div>
    </>
  );
};
