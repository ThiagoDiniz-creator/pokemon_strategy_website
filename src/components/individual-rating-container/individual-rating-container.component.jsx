import React from "react";
import "./individual-rating.styles.css";

const getInformation = (pokemon) => {
  console.log("here");
  //to do
}

const IndividualRating = ({ pokemon }) => {
  return <div className="individual-rating-container">
    <form className="individual-rating__form">
        <div>
          <label>
            Pokemon
          </label>
          <input type={"text"} readOnly={true} value={pokemon.name}/>
        </div>
        <button onClick={() => getInformation(pokemon)} type="button">
          Get 
        </button>
    </form>
  </div>;
};

export default IndividualRating;
