import React from "react";
import "./stats.styles.css";

const Stats = ({pokemon}) =>(
    <div className="stats-container">
        {pokemon.stats[0].base_stat}
        {pokemon.abilities.map(({ability}) => <p key={ability.name}>{ability.name}</p>)}
    </div>
)

export default Stats;