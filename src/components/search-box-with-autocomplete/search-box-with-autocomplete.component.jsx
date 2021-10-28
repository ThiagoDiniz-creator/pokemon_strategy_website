import React from "react";
import "./search-box-with-autocomplete.styles.css";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";
import { connect } from "react-redux";
import { addPokemon } from "../../redux/pokemon_team/pokemon_team.actions";
import { getPokemonByName } from "../../utils/pokeapi";

class SearchBoxWithAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSuggestion: "",
      currentSuggestions: "",
      userInput: "",
      autoComplete: false,
    };
  }

  handleInput = async (e) => {
    let { currentSuggestions, autoComplete } = this.state;
    const { value } = e.target;

    if (autoComplete === false && value.length > 0) {
      autoComplete = true;
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
    } else if (autoComplete === true && value.length === 0) {
      autoComplete = false;
    } else if (autoComplete === true && value.length > 0) {
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
    }

    this.setState({
      currentSuggestions: currentSuggestions,
      userInput: value,
      autoComplete: autoComplete,
    });
  };

  getSuggestions = (input, data) => {
    return data.filter((element) =>
      element.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  render() {
    const { currentSuggestions, autoComplete } = this.state;
    return (
      <div className="search-box-autocomplete">
        <input
          className="search-box-autocomplete__input"
          onChange={(e) => this.handleInput(e)}
        ></input>
        <ul
          className={`search-box-autocomplete__list${
            !autoComplete ? "-invisible" : ""
          }`}
        >
          {autoComplete && currentSuggestions.length > 0
            ? currentSuggestions.map((suggestion, idx) =>
                idx < 6 ? (
                  <li
                    className="search-box-autocomplete__list-element"
                    key={suggestion.name}
                    onClick={() =>
                      getPokemonByName(suggestion.name, (err, body) =>
                        this.props.addPokemon(body)
                      )
                    }
                  >
                    <img
                      className="search-box-autocomplete__sprite"
                      src={suggestion.sprite}
                      width="75px"
                      height="75px"
                      alt={suggestion.name}
                    />
                    <div>{suggestion.name}</div>
                  </li>
                ) : undefined
              )
            : undefined}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
});

const mapStateToProps = (state) => ({
  pokemons: state.pokemonTeam.pokemons,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxWithAutoComplete);
