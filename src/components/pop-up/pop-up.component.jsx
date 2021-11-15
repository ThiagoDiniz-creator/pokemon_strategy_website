import React from "react";
import "./pop-up.styles.css";

const PopUp = ({ isVisible = false, index = -1 }) => (
  <div className={`pop-up__container${isVisible ? _visible : null}`}>
    {index !== -1 ? <div className="pop-up__pokemon-stats">
        
    </div> : null}
  </div>
);

export default PopUp;
