import React from "react";
import NavbarItem from "../navbar-item/navbar-item.component";
import "./navbar.styles.css";

const NavBar = ({ brandText, brandUrl, items }) => (
  <nav className="navbar">
    <ul className="navbar__items">
      <NavbarItem
        key={"navbar-brand"}
        itemUrl={brandUrl}
        itemText={brandText}
      ></NavbarItem>

      {items.map(({ content, url, handleClick }) => (
        <NavbarItem
          key={content}
          itemUrl={url}
          itemText={content}
          handleClick={handleClick}
        />
      ))}
    </ul>
  </nav>
);

export default NavBar;
