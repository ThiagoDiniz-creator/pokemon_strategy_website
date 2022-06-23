import {
  Avatar,
  Container,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  Button,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changePopup as changePopupExternal } from "../../redux/pop-up/pop-up.actions";
import { getPokemonShortListName } from "../../utils/pokemonList";
import MinusIcon from "../minus-icon/minus-icon.component";

const AbilityPopup = ({
  popupName,
  selectedAbility,
  showStack,
  setShowStack,
  popup: popupData,
  changePopup
}) => {
  const [popup] = useState(
    popupData !== undefined
      ? popupData.popups.find(({ title }) => title === popupName)
      : undefined
  );

  return popup !== undefined ? (
    <Dialog open={popup.visible} maxWidth="xl">
      <DialogTitle sx={{display: "flex"}} component={"div"}>
        <Typography variant="h4">
          {popup.title}
          </Typography>
          <MinusIcon handleClick={() => {
              changePopup({popup: {
                  ...popup,
                  visible: false
              }})
          }} />
          </DialogTitle>
      <DialogContent>
        <Container sx={{ display: "flex", flexWrap: "wrap", padding: "20px" }}>
          <Container
            disableGutters
            sx={{
              border: "1px solid black",
              width: "100%",
              margin: "4px",
              padding: "0.7vw",
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
              width: "100%",
              margin: "4px",
              padding: "0.7vw",
            }}
          >
            <Typography variant="h6" sx={{ width: "100%" }}>
              {"Flavor text"}
            </Typography>
            <Typography sx={{ marginLeft: "2vw" }}>
              {selectedAbility.flavor_text_entry.flavor_text}
            </Typography>
          </Container>

          <Container
            disableGutters
            sx={{
              border: "1px solid black",
              width: "100%",
              margin: "4px",
              padding: "0.7vw",
            }}
          >
            <Typography variant="h6">Generation</Typography>
            <Typography sx={{ marginLeft: "2vw" }}>
              {"This ability was presented in " +
                selectedAbility.generation.name.charAt(0).toUpperCase() +
                selectedAbility.generation.name.slice(1)}
            </Typography>
          </Container>

          <Container
            disableGutters
            sx={{
              border: "1px solid black",
              width: "100%",
              margin: "4px",
              padding: "0.7vw",
            }}
          >
            <Typography variant="h6" sx={{ width: "100%" }}>
              {"Visibility status"}
            </Typography>
            <Typography
              sx={
                selectedAbility.hidden
                  ? {
                      backgroundColor: "black",
                      color: "white",
                      border: "1px solid black",
                      padding: "10px",
                      width: "fit-content"
                    }
                  : {
                      backgroundColor: "green",
                      color: "white",
                      border: "1px solid black",
                      padding: "10px ",
                      width: "fit-content"
                    }
              }
            >
              {!selectedAbility.hidden
                ? "This isn't a hidden ability!"
                : "This is a hidden ability !"}
            </Typography>
          </Container>

          <Box
            sx={{
              border: "1px solid black",
              padding: "0.8vw",
              margin: "4px",
              width: "100%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "100%",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ height: "fit-content", width: "100%" }}>
                Pokemons that have this ability
              </Typography>
              <Button
                onClick={() => setShowStack(!showStack)}
                variant="contained"
              >
                {showStack ? "Hide pokemons" : "Show pokemons"}
              </Button>
            </Box>
            {showStack ? (
              <Stack direction="row" spacing={2} sx={{display: "flex"}}>
                {selectedAbility.pokemon.map(({ pokemon }) => {
                  const pokemonData = getPokemonShortListName(pokemon.name);
                  if (pokemonData) {
                    return (
                      <Avatar
                        sx={{ width: "40px" }}
                        src={pokemonData.sprite}
                        alt={pokemonData.name}
                        key={pokemonData.name + "avatar"}
                      />
                    );
                  }
                })}
              </Stack>
            ) : undefined}
          </Box>
        </Container>
      </DialogContent>
    </Dialog>
  ) : null;
};

const mapStateToProps = ({ popup }) => ({
  popup,
});

const mapDispatchToProps = (dispatch) => ({
    changePopup: (popup) => dispatch(changePopupExternal(popup))
});

export default connect(mapStateToProps, mapDispatchToProps)(AbilityPopup);
