import React from "react";
import { Link } from "react-router-dom";
import "./navbar-item.styles.css";

import { Typography } from "@mui/material";

const NavbarItem = ({ itemUrl, itemText, handleClick, ...otherProps }) => (
  <Link
    className="navbar__item"
    onClick={handleClick}
    to={`${itemUrl}`}
    {...otherProps}
  >
    <Typography variant="h6">{itemText}</Typography>
  </Link>
);

export default NavbarItem;
