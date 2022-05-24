//Importing React
import React from "react";

//Importing stylesheet
import "./card-list.styles.css";

//Importing components
import Card from "../card/card.component";
import { Grow } from "@mui/material";

export const CardList = ({
  pokemonList,
  limit,
  handleClick,
  ...otherProps
}) => {
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
    >
      <div className="card-list" {...otherProps}>
        {pokemonList.map((pokemon, idx) => {
          return idx < limit ? (
            <Card
              pokemon={pokemon}
              key={pokemon.name}
              handleClick={!handleClick ? false : handleClick}
            />
          ) : null;
        })}
      </div>
    </Grow>
  );
};
export default CardList;
