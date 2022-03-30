import React from "react";
import TypeSymbol from "../type-symbol/type-symbol.component";
import "./pokedex-presentation-container.styles.css";

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
      <div className="pokedex-presentation-name">{pokemon.name}</div>
      <div>{"ID: " + pokemon.id}</div>

      <div className="pokedex-presentation-type">
        <div className="pokedex-presentation-type__title">Types</div>
        {pokemon.types.map(({ type: { name } }) => (
          <TypeSymbol key={"type-symbol" + name} typeName={name} />
        ))}
      </div>
      <div className="pokedex-presentation-data">
        <div className="pokedex-presentation-data__title">
          Data
        </div>
        <div className="pokedex-presentation-data__height">
          <div className="pokedex-presentation-data_height-title">Height</div>
          <div className="pokedex-presentation-data_height-content">
            {" "}
            {pokemon.height / 10 + " meters"}
          </div>
        </div>
        <div className="pokedex-presentation-data__weight">
          <div className="pokedex-presentation-data_height-title">Weight</div>
          <div className="pokedex-presentation-data_height-content">
            {pokemon.weight / 10 + " kilograms"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPresentationContainer;
