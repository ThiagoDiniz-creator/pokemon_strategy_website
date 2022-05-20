import React from "react";
import { Link, withRouter } from "react-router-dom";
//import "./card.styles.css";
import CardMaterial from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Card = ({ pokemon }) => {
  return (
    <CardMaterial >
      <Link to={{ pathname: `/pokemon/${pokemon.name}` }}>

      <CardMedia
        component="img"
        height="140"
        image={pokemon.sprite}
        alt={pokemon.name}
        sx={{objectFit: "contain"}}
      />

      <CardContent>
        <Typography>
        {pokemon.name}
        </Typography>
        <Typography>
          {"ID " + pokemon.id}
        </Typography>

      </CardContent>
      </Link>
    </CardMaterial>
  );
};
export default withRouter(Card);
