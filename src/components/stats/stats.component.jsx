import React from "react";
import "./stats.styles.css";

const Stats = ({pokemon}) =>(
    <div className="stats-container">
        {pokemon.abilities.map(({ability}) => <p>{ability.name}</p>)}
    </div>
)

export default Stats;