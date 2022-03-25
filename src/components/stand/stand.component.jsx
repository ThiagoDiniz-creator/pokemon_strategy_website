import React from "react";
import "./stand.styles.css";
import { connect } from "react-redux";
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
import { removePokemon } from "../../redux/pokemon_team/pokemon_team.actions";

const Stand = ({ pokemonTeam, removePokemonStand }) => (
  <div className="stand">
    <ul className="stand-list">
      {pokemonTeam.pokemons.length > 0
        ? pokemonTeam.pokemons.map((pokemon, idx) => {
            return (
              <li
                key={Math.random()}
                id={Math.random()}
                className="stand-list__element"
              >
                <img src={pokemon.sprite} alt={pokemon.name} />
                <div>{pokemon.name}</div>
                <div className="stand-list__button-holder">
                  <MinusIcon
                    handleClick={() => {
                      console.log(pokemon.id, idx);
                      removePokemonStand(pokemon.id, idx);
                    }}
                  />
                  <CogIcon />
                </div>
              </li>
            );
          })
        : <h1>
          No pokemon selected yet
          </h1>}
    </ul>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removePokemonStand: (id, index) => dispatch(removePokemon(id, index)),
});

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stand);
