import { matchupActionTypes } from "./matchup.types";
import {
  generateRandomIdentifier,
  getPokemonFullList,
} from "../../utils/pokemonList";

const INITIAL_STATE = {
  yourPokemon: undefined,
  opponentPokemon: undefined,
};

export const matchupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // The ADD_YOUR_POKEMON reducer will need an ID, to get the proper pokemon data. No additional data is needed.
    case matchupActionTypes.ADD_YOUR_POKEMON:
      if (state.yourPokemon === undefined) {
        const pokemon = getPokemonFullList(action.payload.id);
        pokemon.randomIdentifier = generateRandomIdentifier();
        return {
          ...state,
          yourPokemon: pokemon,
        };
      }

      return {
        ...state,
      };

    // The CHANGE_YOUR_POKEMON case will receive an whole new object called Pokemon, that will replace the current pokemon.
    case matchupActionTypes.CHANGE_YOUR_POKEMON:
      if (
        !(
          action.payload.pokemon !== undefined &&
          action.payload.pokemon.id !== undefined
        )
      )
        return {
          ...state,
        };

      if (action.payload.randomIdentifier === undefined) {
        const { pokemon } = action.payload;
        pokemon.randomIdentifier = generateRandomIdentifier();
        return {
          ...state,
          yourPokemon: pokemon,
        };
      }
      return {
        ...state,
        yourPokemon: action.payload.pokemon,
      };

    case matchupActionTypes.REMOVE_YOUR_POKEMON:
      return {
        ...state,
        yourPokemon: undefined,
      };
    case matchupActionTypes.ADD_OPPONENT_POKEMON:
      if (state.opponentPokemon === undefined) {
        const pokemon = getPokemonFullList(action.payload.id);
        pokemon.randomIdentifier = generateRandomIdentifier();
        return {
          ...state,
          opponentPokemon: pokemon,
        };
      }

      return {
        ...state,
      };
    case matchupActionTypes.CHANGE_OPPONENT_POKEMON:
      if (
        !(
          action.payload.pokemon !== undefined &&
          action.payload.pokemon.id !== undefined
        )
      )
        return {
          ...state,
        };

      if (action.payload.randomIdentifier === undefined) {
        const { pokemon } = action.payload;
        pokemon.randomIdentifier = generateRandomIdentifier();
        return {
          ...state,
          opponentPokemon: pokemon,
        };
      }
      return {
        ...state,
        opponentPokemon: action.payload.pokemon,
      };

    case matchupActionTypes.REMOVE_OPPONENT_POKEMON:
      return {
        ...state,
        opponentPokemon: undefined,
      };
    default:
      return {
        ...state,
      };
  }
};
