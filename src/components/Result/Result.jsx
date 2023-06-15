import React from "react";
import style from "./Result.module.css";

const Result = ({correct}) => {
  return (
    <div className={style.block}>
      <img
        src="https://img.freepik.com/free-vector/birthday-illustration-with-presents_23-2149068182.jpg"
        alt="end"/>
      <h2 className={style.title}>Вы отгадали {correct} из 4 вопросов</h2>
      <a href='/'>
      <button className={style.button}>Попробовать еще раз</button>
      </a>
    </div>
  );
};

export default Result;
