import { useState } from "react";
import styles from "./app.module.css";

import { CardContainer } from "../cardContainer";

import {
  BsDice1,
  BsDice2Fill,
  BsFillDice3Fill,
  BsDice4Fill,
  BsFillDice5Fill,
  BsDice6,
} from "react-icons/bs";

const App = () => {
  const [diceResult, setDiceResult] = useState(6);

  const handleRollDice = () => {
    let number = parseInt(Math.random() * (7 - 1) + 1);
    setDiceResult(number);
  };

  return (
    <>
      <div className={styles.title__container}>
        <div className={styles.dice__container}>
          <BsFillDice3Fill className={styles.dice__bump__up} />
          <BsDice6 className={styles.dice__bump__down} />
          <BsDice4Fill className={styles.dice__bump__up} />
        </div>
        <h1 className={styles.title}>Roll the dice, get a random card!</h1>
        <div className={styles.dice__container}>
          <BsFillDice5Fill className={styles.dice__bump__up} />
          <BsDice1 className={styles.dice__bump__down} />
          <BsDice2Fill className={styles.dice__bump__up} />
        </div>
      </div>
      <button className={styles.roll__button} onClick={handleRollDice}>
        <BsDice6 className={styles.button__dice} />
        Roll !
      </button>

      <div className={styles.card__result__container}>
        <h2 className={styles.card__result__title}>
          Result is... {diceResult}!
          <div className={styles.card__container}>
            <CardContainer card={diceResult} />
          </div>
        </h2>
      </div>
    </>
  );
};

export default App;
