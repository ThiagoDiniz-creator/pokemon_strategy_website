import React from "react";
import AbilityBox from "../ability-box/ability-box.component";
import "./stats.styles.css";

const Stats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <AbilityBox abilities={pokemon.abilities} />

      <div className="stats__list-container">
        <div className="stats__list-title">Stats</div>
        <div className="stats__list">
          {pokemon.stats.map((stat) => {
            return (
              <div className="stats__list-item">
                <div className="stats__list-item-title">
                  {stat.stat.name.toUpperCase()}
                </div>
                <div className="stats__list-item-value">{stat.base_stat}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
