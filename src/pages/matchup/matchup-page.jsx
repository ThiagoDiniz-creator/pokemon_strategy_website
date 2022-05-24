import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import PokemonDisplay from "../../components/pokemon-display/pokemon-display.component";
import { pokemonDisplayTypes } from "../../components/pokemon-display/pokemon-display.types";
import "./matchup-page.styles.css";
import { Container } from "@mui/material";
import {
  ButtonBar,
  ButtonPatern,
} from "../../components/button-bar/button-bar.component";
import { connect } from "react-redux";
import {
  removeOpponentPokemon,
  removeYourPokemon,
} from "../../redux/matchup/matchup.actions";

const MatchupPage = ({removeAllPokemons}) => {
  const [started, setStarted] = useState(false);

  return !started ? (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <CustomButton
        useTransition
        innerText={"Start"}
        style={{
          backgroundColor: "#FFFFFF",
          fontSize: "150%",
          width: "240px",
          height: "120px",
          margin: "auto",
        }}
        onClick={() => setStarted(true)}
      />
    </Container>
  ) : (
    <div className="matchup-page">
      <div className="matchup-page__left">
        <PokemonDisplay side={pokemonDisplayTypes.YOUR_POKEMON} />
      </div>

      <ButtonBar
        buttons={[
          <ButtonPatern
            title={"BATTLE"}
            color={"error"}
            handleClick={() => console.log("BATTLE!")}
            sx={{ padding: "40px", marginLeft: "2px" }}
          />,
          <ButtonPatern
            title={"RESET"}
            color={"info"}
            handleClick={() => removeAllPokemons()}
            sx={{ padding: "40px", marginLeft: "4px", marginRight: "4px" }}
          />,
          <ButtonPatern
            title={"SAVE"}
            color={"success"}
            handleClick={() => console.log("SAVE!")}
            sx={{ padding: "40px", marginRight: "2px" }}
          />,
        ]}
      />

      <div className="matchup-page__right">
        <PokemonDisplay side={pokemonDisplayTypes.OPPONENT_POKEMON} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeAllPokemons: () => {
    dispatch(removeYourPokemon());
    dispatch(removeOpponentPokemon());
  },
});

export default connect(undefined, mapDispatchToProps)(MatchupPage);
