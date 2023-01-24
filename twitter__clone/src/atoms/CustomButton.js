import React from "react";
import style from "./customButton.module.css";
function CustomButton({ Icon, title, classname }) {
  return (
    <>
      <button className={style.tweetBtn} onClick={handleClickOpen}>
        <p>{title}</p>
      </button>
    </>
  );
}

export default CustomButton;



