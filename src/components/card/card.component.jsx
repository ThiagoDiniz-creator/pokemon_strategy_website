//Importing React
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Importing styles
import "./card.styles.css";

import CardMaterial from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Card = ({ pokemon, handleClick, ...otherProps }) => {
  return (
    <CardMaterial >
      <Link to={{ pathname: `/pokemon/${pokemon.name}` }}>

      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprite}
        alt={pokemon.name}
      />

      <CardContent>
        <Typography>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </Typography>
        <Typography>
          {"ID: " + pokemon.id}
        </Typography>

      </CardContent>
      </Link>
    </CardMaterial>
  );
};
export default withRouter(Card);
