import React from "react";
import "./pokedex-page.styles.css";
import { getPokemonFullListName } from "../../utils/pokemonList";
import Stats from "../../components/stats/stats.component";
import PokedexPresentationContainer from "../../components/pokedex-presentation-container/pokedex-presentation-container.component";

class PokedexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
      wasLoaded: false,
    };
  }
  loadPokemon = (pokemon) =>
    this.setState({ pokemon: pokemon, wasLoaded: true }, console.log(pokemon));

  componentDidMount() {
    this.loadPokemon(
      getPokemonFullListName(this.props.match.params.pokemonName)
    );
  }

  render() {
    const { wasLoaded, pokemon } = this.state;
    return wasLoaded ? (
      <div className="pokedex-container">
        <Stats pokemon={pokemon} />
        <PokedexPresentationContainer pokemon={pokemon} />
        <div className="pokedex-rating-container">
          <center>UNDER CONSTRUCTION</center>
        </div>
      </div>
    ) : (
      <div>Não carreguei</div>
    );
  }
}

export default PokedexPage;
