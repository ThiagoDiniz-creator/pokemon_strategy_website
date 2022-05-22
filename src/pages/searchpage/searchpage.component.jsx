import React from "react";
import "./searchpage.styles.css";
import SearchBox from "../../components/search-box/search-box.component";
import shortPokemonList from "../../assets/JSON/shortPokemonList.json";
import CardList from "../../components/card-list/card-list.component";

import { Typography, Container, Alert, Grow } from "@mui/material";

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: shortPokemonList,
      filteredPokemonList: "",
      searchBoxContent: "",
      clickedButton: false,
      showAlert: false,
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
      this.setState({ clickedButton: true, showAlert: false });
    } else if (event.key === "Enter" || event.key === undefined) {
      this.setState({ showAlert: true });
    }
  };

  setAlertTimer = () => {
    setTimeout(() => this.setState({ showAlert: false }), 3 * 1000);
  };

  render() {
    const { filteredPokemonList, clickedButton } = this.state;
    return (
      <div className="searchpage-container">
        <Typography
          className="searchpage-title"
          sx={!clickedButton ? { marginTop: "3vh" } : {}}
          variant={!clickedButton ? "h2" : "h3"}
        >
          Search!
        </Typography>

        {!clickedButton ? (
          <Container>
            <Typography sx={{ width: "100%", textAlign: "center" }}>
              Type the name of a Pokemon, and click the Magnifier button!
            </Typography>
          </Container>
        ) : null}
        <SearchBox
          handleChange={this.filterList}
          handleClick={this.handleClick}
          clickedButton={this.state.clickedButton}
        />
        {this.state.showAlert ? (
          <Alert severity="error" sx={{ position: "absolute" }}>
            You need to type before searching for a Pokemon!
            {this.setAlertTimer()}
          </Alert>
        ) : null}
        {this.state.clickedButton ? (

            <CardList pokemonList={filteredPokemonList} limit={10} />
        ) : null}
      </div>
    );
  }
}

export default SearchPage;
