import React from "react";
import AbilityBox from "../ability-box/ability-box.component";
import "./stats.styles.css";

const Stats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <div className="stats-abilities">
          <div className="stats-abilities__title">
              Abilities
          </div>
        {pokemon.abilities.map(({ ability }) => (
          <AbilityBox abilityName={ability.name} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
