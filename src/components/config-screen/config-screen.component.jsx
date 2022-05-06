import React, { useState } from "react";
import { Container, Typography, Slider, Box, Input } from "@mui/material";
import { connect } from "react-redux";
import { changePopup as changePopupExternal } from "../../redux/pop-up/pop-up.actions";
import { calculateStat, STATS_PATTERN } from "../../utils/stats";
import { changePokemon as changePokemonExternal } from "../../redux/pokemon_team/pokemon_team.actions";

const ConfigScreen = ({ pokemon, changePokemon }) => {
  const [stats, setStats] = useState(STATS_PATTERN);

  const handleSlider = (event, isEffort, statname) => {
    const modifiedStatIndex = stats.findIndex(
      ({ stat: Istat }) => Istat.name === statname
    );

    if (modifiedStatIndex !== -1) {
      stats[modifiedStatIndex][isEffort ? "effort" : "iv"] = event.target.value;
      recalculateStat(stats[modifiedStatIndex].stat.name);
    }
  };

  const handleInputLoaded = (fullStat, statname, idx) => {
    if (stats[idx].first_loading) {
      stats[idx] = fullStat;
      recalculateStat(statname);
      stats[idx].first_loading = false;
    }
  };

  const recalculateStat = (statName) => {
    const statIndex = stats.findIndex(({ stat }) => stat.name === statName);

    if (statIndex !== -1) {
      const stat = stats[statIndex];
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

  if (pokemon === undefined || pokemon.stats === undefined) {
    return <h1>Nenhum Pokémon foi selecionado</h1>;
  } else {
    return (
      <Container>
        <Container>
          <Typography>Level</Typography>
          <Slider
            defaultValue={5}
            min={1}
            max={100}
            valueLabelDisplay="on"
            size="small"
          />
        </Container>

        <Container>
          <Typography
            sx={{
              margin: "auto",
            }}
          >
            Stats and effort points
          </Typography>
          {pokemon.stats.map((fullStat, idx) => {
            const { stat, base_stat: baseStat, effort } = fullStat;

            return (
              <Box
                key={stat.name + pokemon.name}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Box>
                  <Typography>{stat.name.toUpperCase()}</Typography>
                  <Input
                    onLoad={handleInputLoaded(fullStat, stat.name, idx)}
                    value={!fullStat.first_loading ? stats[idx].stat.value : 0}
                  />
                </Box>
                <Box
                  sx={{
                    width: "25%",
                  }}
                >
                  <Typography>Individual Value (IV)</Typography>
                  <Slider
                    size="small"
                    defaultValue={1}
                    max={64}
                    min={1}
                    valueLabelDisplay="on"
                    onChange={(event) => handleSlider(event, false, stat.name)}
                  />
                </Box>
                <Box
                  sx={{
                    width: "25%",
                  }}
                >
                  <Typography>Effort Value (IV)</Typography>
                  <Slider
                    size="small"
                    defaultValue={1}
                    max={64}
                    min={1}
                    valueLabelDisplay="on"
                    onChange={(event) => handleSlider(event, true, stat.name)}
                  />
                </Box>
              </Box>
            );
          })}
        </Container>
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
