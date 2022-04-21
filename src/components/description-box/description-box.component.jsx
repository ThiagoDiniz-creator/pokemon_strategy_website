import { Container, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./description-box.styles.css";
import { connect } from "react-redux";
import { addPopup, changePopup } from "../../redux/pop-up/pop-up.actions";

const DescriptionBox = ({
  title,
  subtitle,
  children,
  popupTitle,
  popup: popupData,
  changePopup,
  addPopup
}) => {

  const popup = popupData.popups.find(({title}) => title === popupTitle);

  return (
    <Container
      sx={{ zIndex: "1", visibility: !popup.visible  ? "hidden" : "visible" }}
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
            popup.visible = !popup.visible;
            changePopup({popup});
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

const mapStateToProps = ({popup}) => ({
  popup
})

const mapDispatchToProps = (dispatch) => ({
  addPopup: (popup) => dispatch(addPopup(popup)),
  changePopup: (popup) => dispatch(changePopup(popup))
})

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionBox);
