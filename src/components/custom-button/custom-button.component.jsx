import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ innerText, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    <label>
    {innerText}
    </label>
  </button>
);

export default CustomButton;
