import React from "react";
import { getAbility } from "../../utils/pokemonList";
import "./ability-box.styles.css";

import { Typography, Container } from "@mui/material";
import { Button } from "@mui/material";
import DescriptionBox from "../../components/description-box/description-box.component";

const AbilityBox = ({ abilities }) => {
  const fetchedAbilities = abilities.map((element) => {
    const newAbility = getAbility(element.ability.name);
    newAbility.hidden = element.is_hidden;
    return newAbility;
  });

  let showDescriptionBox = false;
  let selectedAbility = fetchedAbilities[0];

  console.log(selectedAbility);

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
              onClick={() => (selectedAbility = ability)}
            >
              Read More
            </Button>
          </div>
        );
      })}
      <DescriptionBox
        title={selectedAbility.name}
        subtitle={"ID:" + selectedAbility.id}
        children={
          <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Container
              disableGutters
              sx={{
                border: "1px solid black",
                width: "50%",
                margin: "0px",
                padding: "1vw",
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
                padding: "1vw",
              }}
            >
              <Typography variant="h6" sx={{ width: "100%" }}>
                {"Flavor text"}
              </Typography>
              <Typography sx={{ marginLeft: "2vw" }}>
                {selectedAbility.flavor_text_entry.flavor_text}
              </Typography>
            </Container>
            <Typography>
              {selectedAbility.generation.name.charAt(0).toUpperCase() +
                selectedAbility.generation.name.slice(1)}
            </Typography>
            <Typography>
              {selectedAbility.hidden
                ? "This ability isn't hidden!"
                : "This ability is hidden!"}
            </Typography>
          </Container>
        }
      />
    </div>
  );
};

export default AbilityBox;
