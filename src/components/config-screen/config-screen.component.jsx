import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Input, TextField, Button } from "@mui/material";
import { connect } from "react-redux";
import { changePopup as changePopupExternal } from "../../redux/pop-up/pop-up.actions";
import { calculateStat, STATS_PATTERN } from "../../utils/stats";
import { changePokemon as changePokemonExternal } from "../../redux/pokemon_team/pokemon_team.actions";

const ConfigScreen = ({ pokemon }) => {
  const [stats, setStats] = useState(STATS_PATTERN);
  const [firstLoad, setFirstLoad] = useState(true);

  const handleTextField = (event, idx, isEffort) => {
    if(event.target.value > -1 && event.target.value < 65){
    stats[idx][isEffort ? "effort" : "iv"] = event.target.value;
  }else{
  event.target.value = 0;
}
  }

  const recalculateStat = (statName) => {
    const statIndex = pokemon.stats.findIndex(
      ({ stat }) => stat.name === statName
    );

    if (statIndex !== -1) {
      const stat = pokemon.stats[statIndex];
      let { base_stat: baseStat, effort: ev } = stat;
      let iv, level;
      let isHealth = statName === "hp";

      if (stat.iv === undefined) {
        stat.iv = 1;
        iv = 1;
      } else {
        iv = stat.iv;
      }

      if (pokemon.level === undefined) {
        pokemon.level = 5;
        level = 5;
      } else {
        level = pokemon.level;
      }

      stat.value = calculateStat(baseStat, ev, iv, level, isHealth);

      stats[statIndex] = stat;
      setStats(stats);
    }
  };

  useEffect(() => {
    setFirstLoad(true);
  }, [pokemon]);

  if (pokemon && firstLoad) {
    setStats(pokemon.stats);
    setFirstLoad(false);

    pokemon.stats.forEach((iStat) => {
      if (iStat.value === undefined) {
        recalculateStat(iStat.stat.name);
      }
    });
  }

  if (
    pokemon === undefined ||
    pokemon.stats === undefined ||
    stats === undefined
  ) {
    return <h1>Nenhum Pokémon foi selecionado</h1>;
  } else {
    return (
      <Container>
        <Box sx={{display: "flex", justifyContent: "space-around"}}>
          <img src={pokemon.sprite}/>
          <Box>
            <Typography sx={{width: "fit-content"}} variant="h6">Level</Typography>
            <TextField defaultValue={pokemon.level} inputProps={{inputMode: "numeric"}} onMouseLeave={(event) => {
              if(event.target.value > 0 && event.target.value < 101){
                pokemon.level = event.target.value;
              }else{
                event.target.value = 5;
              }
            }}/>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {stats.map((iStat, idx) => {
            const { base_stat: baseStat, effort, stat, value, iv } = iStat;

            return (
              <Box sx={{ width: "25%", display: "flex", flexWrap: "wrap", padding: "5.5px" }}>
                <Typography variant="h6" sx={{flexGrow: "1"}}>{stat.name.toUpperCase()}</Typography>
                <Typography variant="h6">{value}</Typography>
                <Box sx={{margin: "4px"}}>
                  <Typography>Effort (Between 0-64)</Typography>
                  <TextField defaultValue={effort} inputProps={{inputMode: "numeric"}} onMouseLeave={(event) => handleTextField(event, idx, true)}/>
                </Box>
                <Box sx={{margin: "4px"}}>
                  <Typography> Individual Value (Between 0-64)</Typography>
                  <TextField defaultValue={iv} inputProps={{inputMode: "numeric"}} onMouseLeave={(event) => handleTextField(event, idx, true)}/>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
        <Button variant="outlined" sx={{margin: "10px"}}>
          Recalculate
        </Button>
        <Button variant="outlined" sx={{margin: "10px"}}>
          Save
        </Button>
        </Box>
      </Container>
    );
  }
};

const mapStateToProps = ({ popup }) => ({ popupData: popup });

const mapDispatchToProps = (dispatch) => ({
  changePopup: (popup) => dispatch(changePopupExternal(popup)),
  changePokemon: (pokemon) => dispatch(changePokemonExternal(pokemon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen);
