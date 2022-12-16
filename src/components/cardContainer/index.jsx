import React from "react";
import { Card1 } from "../card1";
import { Card2 } from "../card2";
import { Card3 } from "../card3";
import { Card4 } from "../card4";
import { Card5 } from "../card5";
import { Card6 } from "../card6";
export const CardContainer = ({ card }) => {
  if (card === 1) {
    return <Card1 />;
  }

  if (card === 2) {
    return <Card2 />;
  }

  if (card === 3) {
    return <Card3 />;
  }

  if (card === 4) {
    return <Card4 />;
  }

  if (card === 5) {
    return <Card5 />;
  }

  if (card === 6) {
    return <Card6 />;
  }
};
