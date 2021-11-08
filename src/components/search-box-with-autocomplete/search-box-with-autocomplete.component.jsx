import React from "react";
import "./search-box-with-autocomplete.styles.css";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";
import { connect } from "react-redux";
import { addPokemon } from "../../redux/pokemon_team/pokemon_team.actions";
<<<<<<< HEAD
import { getPokemonByName } from "../../utils/pokeapi";
=======
import PlusIcon from "../plus-icon/plus-icon.component";
>>>>>>> 6540717 (update)

class SearchBoxWithAutoComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      selectedSuggestion: "",
=======
>>>>>>> 6540717 (update)
      currentSuggestions: "",
      userInput: "",
      autoComplete: false,
    };
  }

  handleInput = async (e) => {
<<<<<<< HEAD
    let { currentSuggestions, autoComplete } = this.state;
=======
    let { currentSuggestions, autoComplete, userInput } = this.state;
>>>>>>> 6540717 (update)
    const { value } = e.target;

    if (autoComplete === false && value.length > 0) {
      autoComplete = true;
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
<<<<<<< HEAD
=======
      userInput = value;
>>>>>>> 6540717 (update)
    } else if (autoComplete === true && value.length === 0) {
      autoComplete = false;
    } else if (autoComplete === true && value.length > 0) {
      currentSuggestions = this.getSuggestions(value, shortPokemonList, 7);
<<<<<<< HEAD
    }

    this.setState({
      currentSuggestions: currentSuggestions,
      userInput: value,
      autoComplete: autoComplete,
=======
      userInput = value;
    }

    this.setState({
      currentSuggestions,
      userInput,
      autoComplete,
>>>>>>> 6540717 (update)
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
<<<<<<< HEAD
=======
        <div className="search-box-autocomplete__title">
          Search for the desired Pokemon
          </div> 
>>>>>>> 6540717 (update)
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
<<<<<<< HEAD
                    onClick={() =>
                      getPokemonByName(suggestion.name, (err, body) =>
                        this.props.addPokemon(body)
                      )
                    }
=======
                    onClick={() => this.props.addPokemon(suggestion)}
>>>>>>> 6540717 (update)
                  >
                    <img
                      className="search-box-autocomplete__sprite"
                      src={suggestion.sprite}
                      width="75px"
                      height="75px"
                      alt={suggestion.name}
                    />
                    <div>{suggestion.name}</div>
<<<<<<< HEAD
=======
                    <div className="search-box-autocomplete__icon-holder">
                      <PlusIcon />
                    </div>
>>>>>>> 6540717 (update)
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

<<<<<<< HEAD
const mapStateToProps = (state) => ({
  pokemons: state.pokemonTeam.pokemons,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBoxWithAutoComplete);
=======
export default connect(null, mapDispatchToProps)(SearchBoxWithAutoComplete);
>>>>>>> 6540717 (update)
