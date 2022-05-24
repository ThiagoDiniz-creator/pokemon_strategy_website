import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import AdvancedPokemonSelector from "../../components/advanced-pokemon-selector/advanced-pokemon-selector.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Stand from "../../components/stand/stand.component";
import "./team.styles.css";
import { addPokemon as addPokemonExternal } from "../../redux/pokemon_team/pokemon_team.actions";

const Team = ({pokemonTeam, addPokemon}) => {
  const [started, setStarted] = useState(false);

  return started && pokemonTeam ? (
    <div className="team-container">
      <div className="team-container__stand-container">
        <Stand />
      </div>
      <div className="team-container__advanced-pokemon-selector-container">
        <AdvancedPokemonSelector limit={6 - pokemonTeam.numberOfPokemons} addPokemon={addPokemon}/>
      </div>
    </div>
  ) : (
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
  );
};

const mapStateToProps = ({ pokemonTeam }) => ({ pokemonTeam });

const mapDispatchToProps = (dispatch) => ({
  addPokemon: (pokemon) => dispatch(addPokemonExternal(pokemon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
