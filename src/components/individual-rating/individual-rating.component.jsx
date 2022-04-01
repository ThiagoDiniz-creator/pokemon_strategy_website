import React from "react";
import "./individual-rating.styles.css";

import { Button, Container, TextField, Typography } from "@mui/material";

const getInformation = (pokemon) => {
  console.log("here");
  //to do
};

const IndividualRating = ({ pokemon }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "33.33333%",
      }}
      className="individual-rating-container"
    >
      <Typography sx={{ width: "100%", textAlign: "center", marginTop: "1vw" }} variant="h3">
        {" "}
        Individual Rating{" "}
      </Typography>
      <form className="individual-rating__form">
          <Typography style={{ width: "100%" }}>Pokemon name</Typography>
          <TextField type={"text"} readOnly={true} value={pokemon.name} />
          <Container
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
            disableGutters
          >
            <Button
              variant="contained"
              onClick={() => getInformation(pokemon)}
              type="button"
            >
              Get
            </Button>
        </Container>
      </form>
    </Container>
  );
};

export default IndividualRating;
