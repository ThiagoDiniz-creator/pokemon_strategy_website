import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import SearchBoxWithAutocomplete from "../../components/search-box-with-autocomplete/search-box-with-autocomplete.component";
import PokemonDisplay from "../../components/pokemon-display/pokemon-display.component";
import { pokemonDisplayTypes } from "../../components/pokemon-display/pokemon-display.types";
import "./matchup-page.styles.css";
import { Container } from "@mui/material";

const MatchupPage = () => {
  const [started, setStarted] = useState(false);

  return !started ? (
    <Container className="matchup-page" sx={{width: "100%", display: "flex", justifyContent: "center"}}>
      <CustomButton
        innerText={"Start"}
        style={{
          backgroundColor: "#FFFFFF",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => setStarted(true)}
      />
    </Container>
  ) : (
    <div className="matchup-page">
      <div className="matchup-page__left">
        <PokemonDisplay side={pokemonDisplayTypes.YOUR_POKEMON}/>
      </div>
      <div className="matchup-page__right">
      <PokemonDisplay side={pokemonDisplayTypes.OPPONENT_POKEMON}/>
      </div>
    </div>
  );
};

export default MatchupPage;
