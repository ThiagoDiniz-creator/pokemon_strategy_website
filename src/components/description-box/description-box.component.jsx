import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import "./description-box.styles.css";

const DescriptionBox = ({
  title,
  subtitle,
  children,
  isHidden: isHiddenProps,
  lastClick
}) => {
  const [isHidden, setHiddenState] = useState(isHiddenProps);
  const [oldLastClick, setOldLastClick] = useState(lastClick);

  useEffect(() => {
    console.log(oldLastClick, " -- ", lastClick, " -- ", isHidden, " -- ", isHiddenProps);

    if(oldLastClick < lastClick){
      setHiddenState(isHiddenProps)
      setOldLastClick(lastClick);
    }
  }, [lastClick]);

  return (
    <Container
      sx={{ zIndex: "1", visibility: isHidden ? "hidden" : "visible" }}
      className="description-box-container"
    >
      <Container
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{ width: "fit-content" }}
          component={"span"}
          variant="h3"
        >
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            setHiddenState(true);
          }}
        >
          Close
        </Button>
      </Container>

      <Typography variant="h6">{subtitle}</Typography>
      {children}
    </Container>
  );
};

export default DescriptionBox;
