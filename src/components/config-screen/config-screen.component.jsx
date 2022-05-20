import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Input,
  TextField,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { changePopup as changePopupExternal } from "../../redux/pop-up/pop-up.actions";
import { calculateStat, STATS_PATTERN } from "../../utils/stats";
import { changePokemon as changePokemonExternal } from "../../redux/pokemon_team/pokemon_team.actions";

const ConfigScreen = ({ pokemon, changePokemon }) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [stats, setStats] = useState(STATS_PATTERN);
  const [hp, setHp] = useState(0);
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [spAttack, setSpAttack] = useState(0);
  const [spDefense, setSpDefense] = useState(0);
  const [speed, setSpeed] = useState(0);

  const returnVariable = (statname) => {
    switch (statname) {
      case "attack":
        return attack;
      case "defense":
        return defense;
      case "special-attack":
        return spAttack;
      case "special-defense":
        return spDefense;
      case "hp":
        return hp;
      case "speed":
        return speed;
    }
  };

  const setStatVariable = (statname, value) => {
    switch (statname) {
      case "attack":
        return setAttack(value);
      case "defense":
        return setDefense(value);
      case "special-attack":
        return setSpAttack(value);
      case "special-defense":
        return setSpDefense(value);
      case "hp":
        return setHp(value);
      case "speed":
        return setSpeed(value);
    }
  };

  const handleTextField = (event, idx, isEffort) => {
    if (event.target.value > -1 && event.target.value < 65) {
      stats[idx][isEffort ? "effort" : "iv"] = parseInt(event.target.value);
    } else {
      event.target.value = 1;
    }
  };

  const recalculateStat = (statName) => {
    if (pokemon.stats !== undefined) {
      if (pokemon.stats.length > 0) {
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
            if (pokemon.temporary_level === undefined) {
              pokemon.temporary_level = 5;
              level = 5;
            } else {
              level = pokemon.temporary_level;
            }
          } else {
            level = pokemon.level;
          }

          stats[statIndex].effort = ev;
          stats[statIndex].iv = iv;
          stats[statIndex].value = calculateStat(
            baseStat,
            ev,
            iv,
            level,
            isHealth
          );
          if (isHealth) {
            console.log(calculateStat(baseStat, ev, iv, level, isHealth));
          }
          setStatVariable(stats[statIndex].stat.name, stats[statIndex].value);
        }
      }
    }
  };

  useEffect(() => {
    setFirstLoad(true);
    console.log("a");
  }, [pokemon]);

  if (pokemon && firstLoad && pokemon.stats) {
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
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <img src={pokemon.sprite} />
          <Box>
            <Typography sx={{ width: "fit-content" }} variant="h6">
              Level
            </Typography>
            <TextField
              defaultValue={pokemon.temporary_level}
              inputProps={{ inputMode: "numeric" }}
              onMouseLeave={(event) => {
                if (event.target.value > 0 && event.target.value < 101) {
                  pokemon.temporary_level = event.target.value;
                } else {
                  event.target.value = 5;
                }
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {stats.map((iStat, idx) => {
            const { base_stat: baseStat, effort, stat, iv } = iStat;

            return (
              <Box
                key={stat.name + "_KEY"}
                sx={{
                  width: "25%",
                  display: "flex",
                  flexWrap: "wrap",
                  padding: "5.5px",
                }}
              >
                <Typography variant="h6" sx={{ flexGrow: "1" }}>
                  {stat.name.toUpperCase()}
                </Typography>
                <Typography variant="h6">
                  {returnVariable(stat.name)}
                </Typography>
                <Box sx={{ margin: "4px" }}>
                  <Typography>Effort (Between 0-64)</Typography>
                  <TextField
                    defaultValue={effort}
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(event) => handleTextField(event, idx, true)}
                  />
                </Box>
                <Box sx={{ margin: "4px" }}>
                  <Typography> Individual Value (Between 0-64)</Typography>
                  <TextField
                    defaultValue={iv}
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(event) => handleTextField(event, idx, true)}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{ margin: "10px" }}
            onClick={(event) => {
              console.log(stats);

              stats.forEach((iStat) => recalculateStat(iStat.stat.name));
            }}
          >
            Recalculate
          </Button>
          <Button
            variant="outlined"
            sx={{ margin: "10px" }}
            onClick={() => {
              pokemon.stats = { ...stats };
              pokemon.level = pokemon.temporary_level;
              pokemon.temporary_level = undefined;
              changePokemon(pokemon, pokemon.randomIdentifier);
            }}
          >
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
