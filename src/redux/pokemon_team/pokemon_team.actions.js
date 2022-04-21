import { pokemonTeamActionTypes } from "./pokemon_team.types";

export const changePokemon = (pokemon, randomIdentifier) => ({
  type: pokemonTeamActionTypes.CHANGE_POKEMON,
  payload: {
    pokemon,
    randomIdentifier,
  },
});

export const addPokemon = (pokemon) => ({
  type: pokemonTeamActionTypes.ADD_POKEMON,
  payload: pokemon,
});

export const removePokemon = (id, index) => ({
  type: pokemonTeamActionTypes.REMOVE_POKEMON,
  payload: {
    id,
    index,
  },
});

export const cleanPokemonTeam = () => ({
  type: pokemonTeamActionTypes.CLEAN_POKEMON_TEAM,
});
