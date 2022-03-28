import React from "react";
import { Link } from "react-router-dom";
import "./navbar-item.styles.css";

const NavbarItem = ({ itemUrl, itemText, handleClick, ...otherProps }) => (
  
  <Link
    className="navbar__item"
    onClick={handleClick}
    to={`${itemUrl}`}
    {...otherProps}
  >
    {itemText}
  </Link>
);

export default NavbarItem;
