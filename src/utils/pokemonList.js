const shortList = require("../assets/JSON/shortPokemonList.json");


const getShortList = () => shortList;

const getPokemonShortList = (id) =>
  shortList.find(
    (pokemon) => pokemon.id === id
  );

const getPokemonShortListName = (name) =>
  shortList.find((pokemon) => pokemon.name === name)

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

const getAbility = (name) =>
  require("../assets/JSON/abilities.json").find(
    (ability) => ability.name == name
  );

module.exports = {
  getShortList,
  getPokemonShortList,
  getShortListWithStats,
  getPokemonShortListName,
  getPokemonShortListWithStats,
  getFullList,
  getPokemonFullListName,
  getPokemonFullList,
  getAbility,
};
