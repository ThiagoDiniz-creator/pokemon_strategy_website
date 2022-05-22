//Importing React
import React from "react";

//Importing stylesheet
import "./card-list.styles.css";

//Importing components
import Card from "../card/card.component";
import { Grow } from "@mui/material";

export const CardList = ({ pokemonList, limit }) => {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <div className="card-list">
        {pokemonList.map((pokemon, idx) => {
          return idx < limit ? (
            <Card pokemon={pokemon} key={pokemon.name} />
          ) : null;
        })}
      </div>
    </Grow>
  );
};
export default CardList;
