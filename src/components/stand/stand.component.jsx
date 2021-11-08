import React from "react";
import "./stand.styles.css";
import { connect } from "react-redux";
<<<<<<< HEAD
=======
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
>>>>>>> 6540717 (update)

const Stand = ({ pokemonTeam }) => (
  <div className="stand">
    <ul className="stand-list">
      {pokemonTeam.pokemons.length > 0
<<<<<<< HEAD
        ? pokemonTeam.pokemons.map(({ pokemon }) => (
            <li
              key={pokemon.species.name + " stand"}
              className="stand-list__element"
            >
              <img />
              <div>{pokemon}</div>
            </li>
          ))
=======
        ? pokemonTeam.pokemons.map((pokemon) => {
          console.log(pokemon)
            return (
              <li key={pokemon.name + " stand"} className="stand-list__element">
                <img src={pokemon.sprite} />
                <div>{pokemon.name}</div>
                <div className="stand-list__button-holder">
                    <MinusIcon />
                    <CogIcon />
                </div>
              </li>
            );
          })
>>>>>>> 6540717 (update)
        : null}
    </ul>
  </div>
);

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

export default connect(mapStateToProps)(Stand);
