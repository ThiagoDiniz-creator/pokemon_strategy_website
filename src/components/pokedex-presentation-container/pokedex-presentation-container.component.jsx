import React from "react";
import TypeSymbol from "../type-symbol/type-symbol.component";
import "./pokedex-presentation-container.styles.css";

import Typography from "@mui/material/Typography";

const PokedexPresentationContainer = ({ pokemon }) => {
  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div className="pokedex-presentation-container">
      <div>
        <img
          className="pokedex-presentation-image"
          src={`${pokemon.sprite}`}
          alt={pokemon.name}
          key={"image" + pokemon.name}
        />
      </div>
      <Typography gutterBottom  variant="h4" className="pokedex-presentation-name">{pokemon.name}</Typography>
      <Typography>{"ID: " + pokemon.id}</Typography>

      <div className="pokedex-presentation-type">
        <Typography className="pokedex-presentation-type__title" variant="h5">Types</Typography>
        {pokemon.types.map(({ type: { name } }) => (
          <TypeSymbol key={"type-symbol" + name} typeName={name} />
        ))}
      </div>
      <div className="pokedex-presentation-data">
        <Typography variant="h5" className="pokedex-presentation-data__title">
          Data
        </Typography>
        <div className="pokedex-presentation-data__height">
          <Typography  className="pokedex-presentation-data_height-title" >Height</Typography>
          <Typography >
            {" "}
            {pokemon.height / 10 + " meters"}
          </Typography>
        </div>
        <div className="pokedex-presentation-data__weight">
          <Typography className="pokedex-presentation-data_height-title" >Weight</Typography>
          <Typography >
            {pokemon.weight / 10 + " kilograms"}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PokedexPresentationContainer;
