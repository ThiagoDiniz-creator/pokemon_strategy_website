import React from "react";
import { Link } from "react-router-dom";
import "./presentation-box.styles.css";

const PresentationBox = ({
  presentationText,
  buttonText,
  backgroundImage,
  backgroundColor,
  textColor,
  buttonClass,
  url,
  backgroundX
}) => (
  <div
    className="presentation-box"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundColor: `${backgroundColor}`,
    }}
  >
    <div className="presentation-box__text-container">
      <span className="presentation-box__text" style={{
        color: textColor
      }}>{presentationText}</span>
    </div>
    <Link to={url} className={`presentation-box_button ${buttonClass}`}>
      {buttonText}
    </Link>
  </div>
);

export default PresentationBox;
