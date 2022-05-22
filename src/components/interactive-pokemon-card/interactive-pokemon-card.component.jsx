import React from "react";
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
import "./interactive-pokemon-card.styles.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  Container,
  Grow,
} from "@mui/material";
import TypeSymbol from "../type-symbol/type-symbol.component";

const InteractivePokemonCard = ({ pokemon, changePokemon, removePokemon }) => {
  return pokemon !== undefined ? (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...(true ? { timeout: 1000 } : {})}
  >
    <Card sx={{ width: "45%", height: "fit-content", alignSelf: "center" }} raised>
      <CardHeader
        title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        variant={"h2"}
      />
      <CardActionArea>
        <CardMedia
          sx={{ width: "60%", margin: "auto" }}
          component="img"
          height="fit-content"
          image={pokemon.sprite}
          alt={pokemon.name}
        />
        {console.log(pokemon)}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {"ID " + pokemon.id}
          </Typography>
          <Container
            disableGutters
            sx={{
              margin: "5px 0px 5px 0px",
              display: "flex",
              justifyContent: "space-around",
              border: "1px solid #e6e6e6",
              borderRadius: "30px",
            }}
          >
            {pokemon.types.map(({ type: { name } }) => (
              <TypeSymbol
                key={"type-symbol" + name}
                typeName={name}
                typeSymbolContainerHeight={"fit-content"}
                imageHeight={"3vmax"}
              />
            ))}
          </Container>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Container
          sx={{
            marginLeft: "3%",
            width: "50%",
            border: "1px solid #b8b8b8",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            display: "flex",
            justifyContent: "center"
          }}
          onClick={() => removePokemon()}
        >
          <MinusIcon style={{ height: "fit-content" }} />
        </Container>
        <Container
          sx={{
            marginLeft: "0px",
            marginRight: "3%",
            width: "50%",
            border: "1px solid #b8b8b8",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            display: "flex",
            justifyContent: "center"

          }}
        >
          <CogIcon style={{ height: "fit-content" }} />
        </Container>
      </CardActions>
    </Card>
    </Grow>

  ) : (
    <Typography>NO DATA FOUND</Typography>
  );
};

export default InteractivePokemonCard;
