import React from "react";
import "./pokedex-presentation-container.styles.css";

const PokedexPresentationContainer = ({ pokemon }) => {
  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
  return (
    <div className="pokedex-presentation-container">
      <div className="presentation-image-container">
        <img
          className="presentation-image"
          src={`${pokemon.sprite}`}
          alt={pokemon.name}
        />
      </div>
      <div className="presentation-name">{pokemon.name}</div>
    </div>
  );
};

export default PokedexPresentationContainer;
