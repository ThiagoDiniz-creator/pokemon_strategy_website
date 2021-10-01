//Importing React
import React from "react";

//Importing stylesheet
import "./card-list.styles.css";

//Importing components
import Card from "../card/card.component";

export const CardList = ({ pokemonList }) => {
  return (
    <div className="card-list">
      {pokemonList.map((pokemon, idx) => {
        return idx < 10 ? <Card pokemon={pokemon} key={pokemon.name} /> : null;
      })}
    </div>
  );
};
export default CardList;
