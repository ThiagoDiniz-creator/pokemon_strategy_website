import React from "react";
import TypeSymbol from "../type-symbol/type-symbol.component";
import "./pokedex-presentation-container.styles.css";

import Image from 'react-bootstrap/Image'
import { Card } from "react-bootstrap";

const PokedexPresentationContainer = ({ pokemon }) => {
  pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div className="pokedex-presentation-container">
      <div>
        <Image
          className="pokedex-presentation-image"
          src={`${pokemon.sprite}`}
          alt={pokemon.name}
          roundedCircle={true}
          fluid={true}
        />
      </div>
      <div className="pokedex-presentation-name">{pokemon.name}</div>
      <div className="pokedex-presentation-type">
        {pokemon.types.map(({ type: { name } }) => (
          <div key={name + pokemon.name}>
            {" "}
            <TypeSymbol typeName={name} />{" "}
          </div>
        ))}
      </div>
      <div className="pokedex-presentation-data">
        <div className="pokedex-presentation-data__height">
          <div className="pokedex-presentation-data_height-title">Height</div>
          <div className="pokedex-presentation-data_height-content">
            {" "}
            {pokemon.height / 10 + " meters"}
          </div>
        </div>
        <div className="pokedex-presentation-data__weight">
          {pokemon.weight / 10 + " kilograms"}
        </div>
      </div>
    </div>
  );
};

export default PokedexPresentationContainer;
