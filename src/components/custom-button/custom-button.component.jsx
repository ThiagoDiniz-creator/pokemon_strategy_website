import { Grow } from "@mui/material";
import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ innerText, useTransition, ...otherProps }) =>
  useTransition ? (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <button className="custom-button" {...otherProps}>
        <label>{innerText}</label>
      </button>
    </Grow>
  ) : (
    <button className="custom-button" {...otherProps}>
      <label>{innerText}</label>
    </button>
  );

export default CustomButton;
