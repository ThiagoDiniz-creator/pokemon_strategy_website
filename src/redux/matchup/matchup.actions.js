import { matchupActionTypes } from "./matchup.types";

export const addYourPokemon = (id) => ({
  type: matchupActionTypes.ADD_YOUR_POKEMON,
  payload: {
    id,
  },
});

export const changeYourPokemon = (pokemon) => ({
  type: matchupActionTypes.CHANGE_YOUR_POKEMON,
  payload: {
    pokemon,
  },
});

export const removeYourPokemon = () => ({
  type: matchupActionTypes.REMOVE_YOUR_POKEMON,
  payload: 0,
});

export const addOpponentPokemon = (id) => ({
  type: matchupActionTypes.ADD_OPPONENT_POKEMON,
  payload: {
    id,
  },
});

export const changeOpponentPokemon = (pokemon) => ({
  type: matchupActionTypes.CHANGE_OPPONENT_POKEMON,
  payload: {
    pokemon,
  },
});

export const removeOpponentPokemon = () => ({
  type: matchupActionTypes.REMOVE_OPPONENT_POKEMON,
  payload: 0,
});
