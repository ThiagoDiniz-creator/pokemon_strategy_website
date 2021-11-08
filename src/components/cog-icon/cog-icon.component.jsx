import React from "react";
import { ReactComponent as CogIconSvg } from "../../assets/cog-icon.svg";
import "./cog-icon.styles.css";

const CogIcon = ({ style, handleClick, ...otherProps }) => (
  <CogIconSvg
    style={style}
    onClick={handleClick}
    className="cog-icon"
    {...otherProps}
  />
);

export default CogIcon;
