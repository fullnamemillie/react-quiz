import React from "react";
import style from "./Quiz.module.css";

const Quiz = ({question, onClickVariant}) => {
  return (
    <div className={style.block}>
      <h1 className={style.title}>
        {question.title}
      </h1>
      <ul className={style.list}>
        {question.variants.map((obj, index) => <li key={index} onClick={()=> onClickVariant(index)} className={style.item}>{obj}</li>)}
      </ul>
    </div>
  );
};

export default Quiz;
