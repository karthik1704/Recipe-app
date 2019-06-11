import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt={title} />
      <p className={style.calories}>
        <b>Calories:{calories}</b>
      </p>
    </div>
  );
};

export default Recipe;
