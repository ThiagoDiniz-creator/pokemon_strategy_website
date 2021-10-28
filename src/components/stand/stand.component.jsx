import React from "react";
import "./stand.styles.css";
import { connect } from "react-redux";

const Stand = ({ pokemonTeam }) => (
  <div className="stand">
    <ul className="stand-list">
      {pokemonTeam.pokemons.length > 0
        ? pokemonTeam.pokemons.map(({ pokemon }) => (
            <li
              key={pokemon.species.name + " stand"}
              className="stand-list__element"
            >
              <img />
              <div>{pokemon}</div>
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

export default connect(mapStateToProps)(Stand);
