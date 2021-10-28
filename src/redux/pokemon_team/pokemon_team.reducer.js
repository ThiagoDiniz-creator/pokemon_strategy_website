import { pokemonTeamActionTypes } from "./pokemon_team.types";
const INITIAL_STATE = {
  numberOfPokemons: 0,
  pokemons: [],
};

export const pokemonTeamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokemonTeamActionTypes.ADD_POKEMON:
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],

        numberOfPokemons: state.numberOfPokemons + 1,
      };
    case pokemonTeamActionTypes.REMOVE_POKEMON:
      return {
        ...state,
        numberOfPokemons: state.numberOfPokemons - 1,
        pokemons: state.pokemons.filter(
          (pokemon) => action.payload.id !== pokemon.selectId
        ),
      };

    case pokemonTeamActionTypes.CHANGE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemonTeamReducer.map((pokemon) => {
          if (action.payload.selectId === pokemon.selectId) {
            return action.payload.newPokemon;
          } else {
            return pokemon;
          }
        }),
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
