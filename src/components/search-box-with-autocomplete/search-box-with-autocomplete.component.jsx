import React from "react";
import "./search-box-with-autocomplete.styles.css";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";
import { connect } from "react-redux";
import { addPokemon } from "../../redux/pokemon_team/pokemon_team.actions";
import PlusIcon from "../plus-icon/plus-icon.component";

class SearchBoxWithAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSuggestions: "",
      userInput: "",
      autoComplete: false,
    };
  }

  handleInput =  (e) => {
    let { currentSuggestions, autoComplete, userInput } = this.state;
    const { value } = e.target;

    if (autoComplete === false && value.length > 0) {
      autoComplete = true;
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
      userInput = value;
    } else if (autoComplete === true && value.length === 0) {
      autoComplete = false;
    } else if (autoComplete === true && value.length > 0) {
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
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
    if(event.key === "Escape"){
      this.setState({autoComplete: false})
    }
    console.log(event.key === "Escape");
  }

  render() {
    const { currentSuggestions, autoComplete } = this.state;
    return (
      <div className="search-box-autocomplete" onKeyDown={(event) => this.handleKeyDown(event)}>
        <div className="search-box-autocomplete__title">
          Search for the desired Pokemon
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
                    onClick={() => this.props.addPokemon(suggestion)}
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
  addPokemon: (pokemon) => dispatch(addPokemon(pokemon)),
});

export default connect(null, mapDispatchToProps)(SearchBoxWithAutoComplete);
