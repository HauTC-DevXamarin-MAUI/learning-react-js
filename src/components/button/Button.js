/** @format */

import React from "react";
// import "./Button.scss";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    /* Using Sass*/
    // <button className={`button ${props.className || ""}`}>
    //   {props.children}
    // </button>

    /* Using Css-module */
    <button
      className={`${styles.button} ${
        props.secondary ? styles.buttonSecondary : ""
      }`}
    >
      {props.children}
    </button>

    /* Using Styled-comonents */
  );
};

export default Button;
