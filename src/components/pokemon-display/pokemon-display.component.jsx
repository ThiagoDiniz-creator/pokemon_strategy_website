import { Container } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeYourPokemon as changeYourPokemonExternal,
  removeYourPokemon as removeYourPokemonExternal,
  changeOpponentPokemon as changeOpponentPokemonExternal,
  removeOpponentPokemon as removeOpponentPokemonExternal,
} from "../../redux/matchup/matchup.actions";
import { pokemonDisplayTypes } from "./pokemon-display.types";
import SearchBoxAutocompleteDisplay from "../search-box-autocomplete-display/search-box-autocomplete-display.component";
import { useEffect } from "react";
import InteractivePokemonCard from "../interactive-pokemon-card/interactive-pokemon-card.component";

/*
import {
  addYourPokemon as addYourPokemonExternal,
  changeYourPokemon as changeYourPokemonExternal,
  removeYourPokemon as removeYourPokemonExternal,
  addOpponentPokemon as addOpponentPokemonExternal,
  changeOpponentPokemon as changeOpponentPokemonExternal,
  removeOpponentPokemon as removeOpponentPokemonExternal,
} from "../../redux/matchup/matchup.actions";



  side,
  matchup,
  changeYourPokemon,
  removeYourPokemon,
  changeOpponentPokemon,
  removeOpponentPokemon,
*/

// The side is a property that will determine which pokemon of the matchup this display will render.
const PokemonDisplay = ({
  side,
  matchup,
  changeYourPokemon,
  removeYourPokemon,
  changeOpponentPokemon,
  removeOpponentPokemon,
}) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [pokemon, setPokemon] = useState(undefined);

  if (firstLoad) {
    if (side === pokemonDisplayTypes.YOUR_POKEMON) {
      setPokemon(matchup.yourPokemon);
    } else if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      setPokemon(matchup.opponentPokemon);
    }
    setFirstLoad(false);
  }

  useEffect(() => {
    if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      if (pokemon !== matchup.opponentPokemon) {
        setPokemon(matchup.opponentPokemon);
      }
    } else if (side === pokemonDisplayTypes.YOUR_POKEMON)
      if (pokemon !== matchup.yourPokemon) setPokemon(matchup.yourPokemon);
  }, [matchup]);

  if (pokemon === undefined) {
    if (side === pokemonDisplayTypes.YOUR_POKEMON) {
      return (
        <Container>
          <SearchBoxAutocompleteDisplay
            side={pokemonDisplayTypes.YOUR_POKEMON}
            title={"Find your Pokemon"}
          />{" "}
        </Container>
      );
    } else if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      return (
        <Container>
          <SearchBoxAutocompleteDisplay
            side={pokemonDisplayTypes.OPPONENT_POKEMON}
            title={"Find your opponent's Pokemon"}
          />
        </Container>
      );
    }
  } else {
    if (side === pokemonDisplayTypes.YOUR_POKEMON) {
      return (
        <Container sx={{display: "flex", justifyContent: "center", borderRight: "1px black solid"}}>
          <InteractivePokemonCard
            pokemon={matchup.yourPokemon}
            changePokemon={(pokemon) => changeYourPokemon(pokemon)}
            removePokemon={() => removeYourPokemon()}
          />
        </Container>
      );
    } else if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      return (
        <Container sx={{display: "flex", justifyContent: "center"}}>
          <InteractivePokemonCard
            pokemon={matchup.opponentPokemon}
            changePokemon={(pokemon) => changeOpponentPokemon(pokemon)}
            removePokemon={() => removeOpponentPokemon()}
          />
        </Container>
      );
    }
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeYourPokemon: (pokemon) => dispatch(changeYourPokemonExternal(pokemon)),
  removeYourPokemon: () => dispatch(removeYourPokemonExternal()),
  changeOpponentPokemon: (pokemon) =>
    dispatch(changeOpponentPokemonExternal(pokemon)),
  removeOpponentPokemon: () => dispatch(removeOpponentPokemonExternal()),
});

const mapStateToProps = ({ matchup }) => ({
  matchup,
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDisplay);
