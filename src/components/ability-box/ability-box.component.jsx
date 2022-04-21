import React from "react";
import { getAbility, getPokemonShortListName } from "../../utils/pokemonList";
import "./ability-box.styles.css";
import { useState } from "react";
import { POPUP_PATTERN } from "../../redux/pop-up/pop-up.reducer";
import { connect } from "react-redux";
import { Typography, Container, Button, Stack, Avatar, Box } from "@mui/material";
import DescriptionBox from "../../components/description-box/description-box.component";
import { addPopup as addPopupExternal, changePopup as changePopupExternal } from "../../redux/pop-up/pop-up.actions";

const AbilityBox = ({ abilities, addPopup, changePopup, popup: popupData }) => {
  const fetchedAbilities = abilities.map((element) => {
    const newAbility = getAbility(element.ability.name);
    newAbility.hidden = element.is_hidden;
    return newAbility;
  });

  const POPUP_TITLE = "ability-box-popup";

  const [isPopupAdded, setIsPopupAdded] = useState(false);

  if (!isPopupAdded) {
    const popup = {...POPUP_PATTERN};
    popup.title = POPUP_TITLE;
    popup.visible = false;
    popup.data = {};
    setIsPopupAdded(true);
    addPopup({popup});
  }

  const popup = popupData.popups.find(({title}) => title === POPUP_TITLE);
  const [selectedAbility, setSelectedAbility] = useState(fetchedAbilities[0]);

  return (
    <div className="stats-abilities">
      <Typography
        paragraph
        gutterBottom
        align="center"
        variant="h5"
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        Abilities
      </Typography>
      {fetchedAbilities.map((ability) => {
        return (
          <div
            className="stats-abilities__item"
            key={"stats-abilities__item" + ability.name}
          >
            <Typography variant="h6">
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </Typography>
            <Typography
              variant="caption"
              className="stats-abilities__item-content"
            >
              {ability.flavor_text_entry.flavor_text}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSelectedAbility(ability);
                popup.visible = true;
                changePopup({popup});
              }
              }
            >
              Read More
            </Button>
          </div>
        );
      })}

      <DescriptionBox
        title={selectedAbility.name}
        subtitle={"ID:" + selectedAbility.id}
        popupTitle={POPUP_TITLE}
        children={
          <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Container
              disableGutters
              sx={{
                border: "1px solid black",
                width: "50%",
                margin: "0px",
                padding: "1.2vw",
              }}
            >
              <Typography variant="h6">Effect</Typography>
              <Typography sx={{ marginLeft: "2vw" }}>
                {
                  selectedAbility.effect_entries.find(
                    (entry) => entry.language.name === "en"
                  ).effect
                }
              </Typography>
            </Container>

            <Container
              disableGutters
              sx={{
                border: "1px solid black",
                width: "50%",
                margin: "0px",
                padding: "1.2vw",
              }}
            >
              <Typography variant="h6" sx={{ width: "100%" }}>
                {"Flavor text"}
              </Typography>
              <Typography sx={{ marginLeft: "2vw" }}>
                {selectedAbility.flavor_text_entry.flavor_text}
              </Typography>
            </Container>
            <Typography sx={{ width: "100%" }}>
              {"This ability was presented in " + selectedAbility.generation.name.charAt(0).toUpperCase() +
                selectedAbility.generation.name.slice(1)}
            </Typography>
            <Typography sx={selectedAbility.hidden ? { backgroundColor: "black", color: "white" } : { backgroundColor: "green" }}>
              {!selectedAbility.hidden
                ? "This isn't a hidden ability!"
                : "This is a hidden ability !"}
            </Typography>
            <Box sx={{ border: "1px solid black", padding: "0.8vw", width: "100%" }}>
              <Typography>
                Pokemons that have this ability
              </Typography>
              <Stack direction="row" spacing={2}>
                {selectedAbility.pokemon.map(({ pokemon }) => {
                  const pokemonData = getPokemonShortListName(pokemon.name);
                  if (pokemonData) {
                    return (
                      <Avatar sx={{ width: "40px" }} src={pokemonData.sprite} alt={pokemonData.name} key={pokemonData.name + "avatar"} />
                    )
                  }
                })}
              </Stack>
            </Box>
          </Container>
        }
      />

    </div>
  );
};


const mapStateToProps = ({ popup }) => ({
  popup
});

const mapDispatchToProps = (dispatch) => ({
  addPopup: (popup) => dispatch(addPopupExternal(popup)),
  changePopup: (popup) => dispatch(changePopupExternal(popup))
})

export default connect(mapStateToProps, mapDispatchToProps)(AbilityBox);
