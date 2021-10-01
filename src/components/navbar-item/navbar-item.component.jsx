import React from "react";
import { Link } from "react-router-dom";
import "./navbar-item.styles.css";

const NavBarItem = ({ itemUrl, itemText }) => (
  <li className="navbar__item">
    <Link className="navbar__item__text" to={`${itemUrl}`}>
      {itemText}
    </Link>
  </li>
);

export default NavBarItem;
