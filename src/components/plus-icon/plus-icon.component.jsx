import React from "react";
import { ReactComponent as PlusIconSvg } from "../../assets/plus-icon.svg";
import "./plus-icon.styles.css";

const PlusIcon = ({ style, handleClick, ...otherProps }) => (
  <PlusIconSvg
    style={style}
    onClick={handleClick}
    className="plus-icon"
    {...otherProps}
  />
);

export default PlusIcon;
