import React from "react";
import MinusIcon from "../minus-icon/minus-icon.component";
import "./interactive-pokemon-card.styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";

const InteractivePokemonCard = ({ pokemon, changePokemon, removePokemon }) => {

  return pokemon !== undefined ? (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={"Pokemon"} variant={"h2"}>
      </CardHeader>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pokemon.sprite}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography>
          <MinusIcon handleClick={() => removePokemon()} />

        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <Typography>NO DATA FOUND</Typography>
  );
};

export default InteractivePokemonCard;
