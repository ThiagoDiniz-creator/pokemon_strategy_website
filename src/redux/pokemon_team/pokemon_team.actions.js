import { pokemonTeamActionTypes } from "./pokemon_team.types";

export const changePokemon = (newPokemon, oldPokemonId) => ({
  type: pokemonTeamActionTypes.CHANGE_POKEMON,
  payload: {
    newPokemon,
    selectId: oldPokemonId,
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
