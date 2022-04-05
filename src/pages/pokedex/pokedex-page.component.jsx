import React from "react";
import "./pokedex-page.styles.css";
import { getPokemonFullListName } from "../../utils/pokemonList";
import Stats from "../../components/stats/stats.component";
import PokedexPresentationContainer from "../../components/pokedex-presentation-container/pokedex-presentation-container.component";
import IndividualRating from "../../components/individual-rating/individual-rating.component";
import DescriptionBox from "../../components/description-box/description-box.component";
import { Container, Typography } from "@mui/material";

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
        <IndividualRating pokemon={pokemon} />
      </div>
    ) : (
      <div>Error: An problem occured when trying to load the page. Please try again later!</div>
    );
  }
}

export default PokedexPage;
