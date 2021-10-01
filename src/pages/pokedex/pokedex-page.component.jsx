import React from "react";
import "./pokedex-page.styles.css";
import { getPokemonByName } from "../../utils/pokeapi";
import Stats from "../../components/stats/stats.component";

class PokedexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      wasLoaded: false,
    };
  }
  loadPokemon = (pokemon) =>
    this.setState({ pokemon: pokemon, wasLoaded: true });

  componentDidMount() {
    getPokemonByName(this.props.match.params.pokemonName, (error, response) =>
      this.loadPokemon(response)
    );
  }

  render() {
    const { wasLoaded, pokemon } = this.state;
    return wasLoaded ? (
      <div className="pokedex-container">
        <Stats pokemon={pokemon} />
        <div className="pokedex-presentation-container">
          <img
            className="presentation-image"
            src={`${pokemon.sprites.versions["generation-v"]["black-white"].front_default}`}
          />
        </div>
        <div className="pokedex-rating-container"></div>
      </div>
    ) : (
      <div></div>
    );
  }
}

export default PokedexPage;
