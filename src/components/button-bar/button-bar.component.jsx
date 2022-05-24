import { Container, Fab, Typography } from "@mui/material";
import React from "react";

export const ButtonPatern = ({ title, color, handleClick, ...otherProps }) => (
  <Fab
    key={"KEY_" + title + color}
    onClick={handleClick}
    color={color}
    {...otherProps}
  >
    <Typography>{title}</Typography>
  </Fab>
);

export const ButtonBar = ({ buttons, ...otherProps }) => {
  return (
    <Container
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "4px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "auto",
        padding: "8px",
        display: "flex",
        width: "fit-content",
        backgroundColor: "#e6e6e6",
        borderRadius: "30px",
      }}
      {...otherProps}
    >
      {buttons.map((button) => button)}
    </Container>
  );
};
