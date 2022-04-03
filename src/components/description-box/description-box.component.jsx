import { Container, Typography } from "@mui/material";
import React from "react";
import "./description-box.styles.css";

const DescriptionBox = ({ title, subtitle, children }) => {
  return (
    <Container className="description-box-container">
      <Typography sx={{ width: "fit-content" }} component={"span"} variant="h3">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </Typography> 
      <Typography variant="h6">{subtitle}</Typography>
      {children}
    </Container>
  );
};

export default DescriptionBox;
