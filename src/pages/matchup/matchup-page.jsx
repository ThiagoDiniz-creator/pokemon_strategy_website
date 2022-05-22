import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import PokemonDisplay from "../../components/pokemon-display/pokemon-display.component";
import { pokemonDisplayTypes } from "../../components/pokemon-display/pokemon-display.types";
import "./matchup-page.styles.css";
import { Container, Fab, Typography } from "@mui/material";

const MatchupPage = () => {
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
          width: "20%",
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
      <Container
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "4px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
          padding: "8px",
          display: "flex",
          width: "fit-content",
          backgroundColor: "#e6e6e6",
          borderRadius: "30px"
        }}
      >
        <Fab
          color="error"
          sx={{
            padding: "40px",
          }}
          enterDe
        >
          <Typography variant="body3">BATTLE!</Typography>
        </Fab>


        <Fab
          color="info"
          sx={{
            padding: "40px",
          }}
        >
          <Typography variant="body3">Reset</Typography>
        </Fab>

        <Fab
          color="success"
          sx={{
            padding: "40px",
          }}
        >
          <Typography variant="body3">Save</Typography>
        </Fab>
      </Container>

      <div className="matchup-page__right">
        <PokemonDisplay side={pokemonDisplayTypes.OPPONENT_POKEMON} />
      </div>
    </div>
  );
};

export default MatchupPage;
