import React from "react";
import "./stand.styles.css";
import {connect} from "react-redux";
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
import {removePokemon, changePokemon as changePokemonExternal} from "../../redux/pokemon_team/pokemon_team.actions";
import {useState, useEffect} from "react";
import DescriptionBox from "../description-box/description-box.component";
import {Container, Input, Slider, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {addPopup as addPopupExternal, changePopup as changePopupExternal} from "../../redux/pop-up/pop-up.actions.js";
import {POPUP_PATTERN} from "../../redux/pop-up/pop-up.reducer.js";

const Stand = ({pokemonTeam, removePokemonStand, changePokemon, changePopup, addPopup, popup: popupData}) => {
  const POPUP_TITLE = "pokemon-stat-configuration-popup"

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [wasPopupAdded, setWasPopupAdded] = useState((popupData.popups.find(({title}) => title === POPUP_TITLE) !== undefined));
  const [popup, setPopup] = useState(
    wasPopupAdded
    ? popupData.popups.find(({title}) => title === POPUP_TITLE)
    : undefined);

  if (!wasPopupAdded) {
    const popup = {
      ...POPUP_PATTERN
    };
    popup.title = POPUP_TITLE;
    popup.visible = false;
    popup.data = {};
    addPopup({popup});
    setWasPopupAdded(true);
    setPopup(popup);
  }

  const calculateStat = (baseValue, ev, iv, level, isHealth) => isHealth
    ? Math.floor(((2 * baseValue + iv + ev) * level) / 100 + level + 10)
    : Math.floor(Math.floor(((2 * baseValue + iv + ev) * level) / 100 + 5));

  const recalculateStat = (statName) => {
    const statIndex = selectedPokemon.stats.findIndex(({stat}) => stat.name === statName);
    if (statIndex !== -1) {
      const stat = selectedPokemon.stats[statIndex];
      let {base_stat: baseStat, effort: ev} = stat;
      let iv, level;
      let isHealth = statName === "hp";

      if (stat.iv === undefined) {
        stat.iv = 1;
        iv = 1
      }else{
        iv = stat.iv;
      }

      if (selectedPokemon.level === undefined) {
        selectedPokemon.level = 5;
        level = 5;
      }else{
        level = selectedPokemon.level;
      }

      stat.value = calculateStat(baseStat, ev, iv, level, isHealth);

      selectedPokemon.stats[statIndex] = stat;
      changePokemon(selectedPokemon, selectedPokemon.randomIdentifier);
    }
  }

  return (<div className="stand">
    <ul className="stand-list">
      {
        pokemonTeam.pokemons.length > 0
          ? (pokemonTeam.pokemons.map((pokemon, idx) => {
            return (<li key={Math.random()} id={Math.random()} className="stand-list__element">
              <img src={pokemon.sprite} alt={pokemon.name}/>
              <div>{pokemon.name}</div>
              <div className="stand-list__button-holder">
                <MinusIcon handleClick={() => {
                    removePokemonStand(pokemon.id, idx);
                  }}/>
                <CogIcon handleClick={() => {
                    setSelectedPokemon(pokemon);
                    popup.visible = true;
                    changePopup({popup});
                  }}/>
              </div>
            </li>);
          }))
          : (<h1>No pokemon selected yet</h1>)
      }
    </ul>
    <DescriptionBox title={"Data"} popupTitle={POPUP_TITLE} subtitle={selectedPokemon
        ? selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)
        : ""
} children={selectedPokemon != false
        ? (<Container>
          <Container>
            <Typography>Level</Typography>
            <Slider defaultValue={5} min={1} max={100} valueLabelDisplay="on" size="small"/>
          </Container>

          <Container>
            <Typography sx={{
                margin: "auto"
              }}>
              Stats and effort points
            </Typography>
            {
              selectedPokemon.stats.map(({
                stat,
                base_stat: baseStat,
                effort
              }, idx) => (<Box key={stat.name + selectedPokemon.name} sx={{
                  display: "flex",
                  justifyContent: "space-around"
                }}>
                <Box>
                  <Typography>{stat.name.toUpperCase()}</Typography>
                  <Input value={recalculateStat(stat.name)}/>
                </Box>
                <Box sx={{
                    width: "25%"
                  }}>
                  <Typography>Individual Value (IV)</Typography>
                  <Slider size="small" defaultValue={1} max={64} min={1} valueLabelDisplay="on" onChange={(event) => {}}/>
                </Box>
                <Box sx={{
                    width: "25%"
                  }}>
                  <Typography>Effort Value (IV)</Typography>
                  <Slider size="small" defaultValue={1} max={64} min={1} valueLabelDisplay="on"/>
                </Box>
              </Box>))
            }
          </Container>
        </Container>)
        : null
}/>
  </div>);
};

const mapDispatchToProps = (dispatch) => ({
  removePokemonStand: (id, index) => dispatch(removePokemon(id, index)),
  changePokemon: (pokemon, randomIdentifier) => dispatch(changePokemonExternal(pokemon, randomIdentifier)),
  addPopup: (popup) => dispatch(addPopupExternal(popup)),
  changePopup: (popup) => dispatch(changePopupExternal(popup))
});

const mapStateToProps = ({pokemonTeam, popup}) => ({pokemonTeam, popup});

export default connect(mapStateToProps, mapDispatchToProps)(Stand);
