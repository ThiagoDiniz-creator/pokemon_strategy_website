import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import CardMaterial from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Card = ({ pokemon, handleClick }) => {
  const [isRaised, setRaised] = useState(false);

  return !handleClick ? (
    <CardMaterial key={"KEY_" + pokemon.name} raised={isRaised} onMouseOver={() => setRaised(true)} onMouseLeave={() => setRaised(false)}>
      <Link to={{ pathname: `/pokemon/${pokemon.name}` }}>
        <CardMedia
          component="img"
          height="140"
          image={pokemon.sprite}
          alt={pokemon.name}
          sx={{ objectFit: "contain" }}
        />

        <CardContent>
          <Typography>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
          <Typography>{"Number: " + pokemon.id}</Typography>
        </CardContent>
      </Link>
    </CardMaterial>
  ) : (
    <CardMaterial onClick={() => handleClick(pokemon)}>
      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprite}
        alt={pokemon.name}
        sx={{ objectFit: "contain" }}
      />

      <CardContent>
        <Typography>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
        <Typography>{"id " + pokemon.id}</Typography>
      </CardContent>
    </CardMaterial>
  );
};
export default withRouter(Card);
