import React from "react";
import "./searchpage.styles.css";
import SearchBox from "../../components/search-box/search-box.component";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";
import CardList from "../../components/card-list/card-list.component";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: shortPokemonList,
      filteredPokemonList: "",
      searchBoxContent: "",
      clickedButton: false,
    };
  }

  filterList = (event) => {
    this.setState({
      filteredPokemonList: shortPokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
      searchBoxContent: event.target.value,
    });
  };

  handleClick = (event) => {
    if (
      this.state.searchBoxContent !== "" &&
      (event.key === "Enter" || event.key === undefined)
    ) {
      this.setState({ clickedButton: true });
    } else {
      //pop-up
    }
  };

  render() {
    const { filteredPokemonList } = this.state;
    return (
      <div className="searchpage-container">
        <SearchBox
          handleChange={this.filterList}
          handleClick={this.handleClick}
          clickedButton={this.state.clickedButton}
        />
        {this.state.clickedButton ? (
          <CardList pokemonList={filteredPokemonList} />
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
