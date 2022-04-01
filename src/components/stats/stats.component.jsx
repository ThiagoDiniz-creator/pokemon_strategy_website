import React from "react";
import AbilityBox from "../ability-box/ability-box.component";
import "./stats.styles.css";

import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Stats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <AbilityBox abilities={pokemon.abilities} />

      <div className="stats__list-container">
      <Typography variant="h4">Stats</Typography>

        <Grid container spacing={0}>
          {pokemon.stats.map((stat) => {
            return (
              <Grid className="stats__list-item" xs={6} style={{flexWrap: "wrap"}}item key={"stats__list-item" + stat.base_stat + stat.stat.name}>
                <Typography style={{width: "100%"}} paragraph>{stat.stat.name.toUpperCase()}</Typography>
                <Typography paragraph>{stat.base_stat}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Stats;
