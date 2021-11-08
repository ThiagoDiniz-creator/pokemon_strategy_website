import React from "react";
import { ReactComponent as MinusIconSvg } from "../../assets/minus-icon.svg";
import "./minus-icon.styles.css";

const MinusIcon = ({ style, handleClick, ...otherProps }) => (
  <MinusIconSvg
    style={style}
    onClick={handleClick}
    className="minus-icon"
    {...otherProps}
  />
);
export default MinusIcon;
