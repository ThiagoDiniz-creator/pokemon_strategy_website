const getShortList = () => require("../assets/JSON/shortPokemonList.json");

const getPokemonShortList = (id) =>
  require("../assets/JSON/shortPokemonList.json").find(
    (pokemon) => pokemon.id === id
  );

const getShortListWithStats = () =>
  require("../assets/JSON/shortPokemonListWithStats.json");

const getPokemonShortListWithStats = (id) =>
  require("../assets/JSON/shortPokemonListWithStats.json").find(
    (pokemon) => pokemon.id === id
  );

const getFullList = () => require("../assets/JSON/fullPokemonList.json");

const getPokemonFullList = (id) =>
  require("../assets/JSON/fullPokemonList.json").find(
    (pokemon) => pokemon.id === id
  );

const getPokemonFullListName = (name) =>
  require("../assets/JSON/fullPokemonList.json").find(
    (pokemon) => pokemon.name === name
  );

module.exports = {
  getShortList,
  getPokemonShortList,
  getShortListWithStats,
  getPokemonShortListWithStats,
  getFullList,
  getPokemonFullListName,
  getPokemonFullList,
};
