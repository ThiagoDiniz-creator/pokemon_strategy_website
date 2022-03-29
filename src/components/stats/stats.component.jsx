import React from "react";
import "./stats.styles.css";

const Stats = ({ pokemon }) => {
    console.log(pokemon)
  return (
    <div className="stats-container">
      <div className="stats-abilities">
          <div className="stats-abilities__title">
              Abilities
          </div>
        {pokemon.abilities.map(({ ability }) => (
          <div className="stats-abilities__item" key={ability.name}>
            {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
