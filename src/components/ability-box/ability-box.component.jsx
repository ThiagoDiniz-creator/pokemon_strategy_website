import React from "react";
import { getAbility } from "../../utils/pokemonList";
import "./ability-box.styles.css";

import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";


const AbilityBox = ({ abilities }) => {
  const fetchedAbilities = abilities.map((element) =>{
    const newAbility = getAbility(element.ability.name);
    newAbility.hidden = element.is_hidden;
    return newAbility;
  });

  return (
    <div className="stats-abilities">
      <Typography paragraph gutterBottom align="center" variant="h5" style={{
        width: "100%",
        justifyContent: "center"
      }}>Abilities</Typography>
      {fetchedAbilities.map((ability) => {
        return (
          <div className="stats-abilities__item" key={"stats-abilities__item" + ability.name}>
            <Typography variant="h6">
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </Typography>
            <Typography variant="caption" className="stats-abilities__item-content">
              {
                ability.flavor_text_entry.flavor_text
              }
            </Typography>
            <Button  variant="contained">
              Read More
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default AbilityBox;
