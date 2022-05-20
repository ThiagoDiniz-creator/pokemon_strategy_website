import { pokemonTeamActionTypes } from "./pokemon_team.types";
import listUtil, { generateRandomIdentifier } from "../../utils/pokemonList";

const INITIAL_STATE = {
  numberOfPokemons: 0,
  pokemons: [],
};
export const pokemonTeamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokemonTeamActionTypes.ADD_POKEMON:
      if (state.numberOfPokemons <= 5) {
        const newPokemon = listUtil.getPokemonFullList(action.payload.id);
        newPokemon.randomIdentifier = generateRandomIdentifier();
        return {
          ...state,
          pokemons: [...state.pokemons, newPokemon],
          numberOfPokemons: state.numberOfPokemons + 1,
        };
      } else {
        return {
          ...state,
        };
      }
    case pokemonTeamActionTypes.REMOVE_POKEMON:
      const { index, id } = action.payload;
      return {
        ...state,
        numberOfPokemons: state.numberOfPokemons - 1,
        pokemons: state.pokemons.filter((pokemon, idx) => {
          if (pokemon.id === id) {
            if (idx === index) {
              return false;
            }
          }
          return true;
        }),
      };

    case pokemonTeamActionTypes.CHANGE_POKEMON:
      const position = state.pokemons.findIndex(
        ({ randomIdentifier }) =>
          randomIdentifier === action.payload.randomIdentifier
      );
      if (position !== -1) {
        state.pokemons[position] = action.payload.pokemon;
      }
      return {
        ...state,
      };

    case pokemonTeamActionTypes.CLEAN_POKEMON_TEAM:
      return {
        ...state,
        pokemons: [],
        numberOfPokemons: 0,
      };

    default:
      return state;
  }
};

//COLOCAR A CITAÇÃO/REFERENCIA
//https://icon-icons.com/pt/icone/pokemon-ir-jogar-jogo-cinema-filme-filme/69163
