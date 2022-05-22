import React from "react";
import "./search-box-autocomplete-display.styles.css";
import { connect } from "react-redux";
import {
  addYourPokemon as addYourPokemonExternal,
  addOpponentPokemon as addOpponentPokemonExternal,
} from "../../redux/matchup/matchup.actions";
import { pokemonDisplayTypes } from "../pokemon-display/pokemon-display.types";
import PlusIcon from "../plus-icon/plus-icon.component";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";

class SearchBoxAutocompleteDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSuggestions: "",
      userInput: "",
      autoComplete: false,
      side: props.side,
      title: props.title,
      addYourPokemon: (id) => props.addYourPokemon(id),
      addOpponentPokemon: (id) => props.addOpponentPokemon(id),
    };
  }

  handleInput = (event) => {
    let { currentSuggestions, autoComplete, userInput } = this.state;
    const { value } = event.target;

    if (autoComplete === false && value.length > 0) {
      autoComplete = true;
      currentSuggestions = this.getSuggestions(value, shortPokemonList);
      userInput = value;
    } else if (autoComplete === true && value.length === 0) {
      autoComplete = false;
    } else if (autoComplete === true && value.length > 0) {
      currentSuggestions = this.getSuggestions(value, shortPokemonList);
      userInput = value;
    }

    this.setState({
      currentSuggestions,
      userInput,
      autoComplete,
    });
  };

  getSuggestions = (input, data) => {
    return data.filter((element) =>
      element.name.toLowerCase().includes(input.toLowerCase())
    );
  };

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.setState({ autoComplete: false });
    }
  };

  render() {

    const { currentSuggestions, autoComplete, title } = this.state;
    return (
      <div
        className="search-box-autocomplete"
        onKeyDown={(event) => this.handleKeyDown(event)}
      >
        <div className="search-box-autocomplete__title">
          {title}
        </div>
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
                    onClick={() => {
                        console.log(this.state.side);
                      if (
                        this.state.side === pokemonDisplayTypes.YOUR_POKEMON
                      ) {
                        this.state.addYourPokemon(suggestion.id);
                      } else if (
                        this.state.side === pokemonDisplayTypes.OPPONENT_POKEMON
                      ) {
                        this.state.addOpponentPokemon(suggestion.id);
                      } else {
                        console.log("INVALID SIDE");
                      }
                    }}
                  >
                    <img
                      className="search-box-autocomplete__sprite"
                      src={suggestion.sprite}
                      width="75px"
                      height="75px"
                      alt={suggestion.name}
                    />
                    <div>{suggestion.name}</div>
                    <div className="search-box-autocomplete__icon-holder">
                      <PlusIcon />
                    </div>
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
  addYourPokemon: (id) => dispatch(addYourPokemonExternal(id)),
  addOpponentPokemon: (id) => dispatch(addOpponentPokemonExternal(id)),
});

const mapStateToProps = ({ matchup }) => ({
  matchup,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxAutocompleteDisplay);
