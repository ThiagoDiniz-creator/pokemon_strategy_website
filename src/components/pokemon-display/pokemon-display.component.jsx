import { Container } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addYourPokemon as addYourPokemonExternal,
  changeYourPokemon as changeYourPokemonExternal,
  removeYourPokemon as removeYourPokemonExternal,
  addOpponentPokemon as addOpponentPokemonExternal,
  changeOpponentPokemon as changeOpponentPokemonExternal,
  removeOpponentPokemon as removeOpponentPokemonExternal,
} from "../../redux/matchup/matchup.actions";

import { pokemonDisplayTypes } from "./pokemon-display.types";
import { useEffect } from "react";
import InteractivePokemonCard from "../interactive-pokemon-card/interactive-pokemon-card.component";
import AdvancedPokemonSelector from "../advanced-pokemon-selector/advanced-pokemon-selector.component";

// The side is a property that will determine which pokemon of the matchup this display will render.
const PokemonDisplay = ({
  addYourPokemon,
  addOpponentPokemon,
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
        <Container
          sx={{
            borderRight: "1px black solid",
            display: "flex",
          }}
        >
          <AdvancedPokemonSelector
            addPokemon={addYourPokemon}
            title={"Choose your Pokemon!"}
            limit={1}
          />
        </Container>
      );
    } else if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      return (
        <Container
          sx={{
            borderRight: "1px black solid",
            display: "flex",
          }}
        >
          <AdvancedPokemonSelector
            addPokemon={addOpponentPokemon}
            title={"Choose your opponent's Pokemon!"}
            limit={1}
          />
        </Container>
      );
    }
  } else {
    if (side === pokemonDisplayTypes.YOUR_POKEMON) {
      return (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRight: "1px black solid",
          }}
        >
          <InteractivePokemonCard
            pokemon={matchup.yourPokemon}
            changePokemon={(pokemon) => changeYourPokemon(pokemon)}
            removePokemon={() => removeYourPokemon()}
          />
        </Container>
      );
    } else if (side === pokemonDisplayTypes.OPPONENT_POKEMON) {
      return (
        <Container sx={{ display: "flex", justifyContent: "center" }}>
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
  addYourPokemon: (pokemon) => dispatch(addYourPokemonExternal(pokemon)),
  addOpponentPokemon: (pokemon) =>
    dispatch(addOpponentPokemonExternal(pokemon)),
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
