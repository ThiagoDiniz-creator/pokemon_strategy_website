import React from "react";
import "./individual-rating.styles.css";

import { Typography } from "@mui/material";

const getInformation = (pokemon) => {
  console.log("here");
  //to do
};

const IndividualRating = ({ pokemon }) => {
  return (
    <div className="individual-rating-container">
      <Typography
        sx={{ width: "100%", textAlign: "center", marginTop: "1vw" }}
        variant="h3"
      >
        {" "}
        Individual Rating{" "}
      </Typography>
      <form className="individual-rating__form">
        <Typography>Pokemon name</Typography>
        <input
          className="individual-rating__form-input"
          type="text"
          readOnly={true}
          value={pokemon.name}
        />

        <button
          className="individual-rating__form-button"
          onClick={() => getInformation(pokemon)}
          type="button"
        >
          Get
        </button>
      </form>
    </div>
  );
};

export default IndividualRating;
