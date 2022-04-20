import React from "react";
import "./stand.styles.css";
import { connect } from "react-redux";
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
import { removePokemon } from "../../redux/pokemon_team/pokemon_team.actions";
import { useState, useEffect } from "react";

const Stand = ({ pokemonTeam, removePokemonStand }) => {
  const [isHidden, setHidden] = useState(true);
  const [lastClick, setLastClick] = useState(0);
  
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  useEffect(() => {

  }, [selectedPokemon])

  const calculateStat = (baseValue, ev, iv, level, isHealth) => (
    isHealth ? Math.floor((2 * baseValue + iv + ev) * level / 100 + level + 10) :
      Math.floor(Math.floor((2 * baseValue + iv + ev) * level / 100 + 5))
  )


  return (
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
                      removePokemonStand(pokemon.id, idx);
                    }}
                  />
                  <CogIcon handleClick={() => {
                    setSelectedPokemon(pokemon);
                    setHidden(false);
                    setLastClick(lastClick + 1);

                    console.log(pokemon);
                  }} />
                </div>
              </li>
            );
          })
          : <h1>
            No pokemon selected yet
          </h1>}
      </ul>
      {
        console.log(selectedPokemon)
      }

    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  removePokemonStand: (id, index) => dispatch(removePokemon(id, index)),
});

const mapStateToProps = ({ pokemonTeam }) => ({
  pokemonTeam,
});

export default connect(mapStateToProps, mapDispatchToProps)(Stand);
