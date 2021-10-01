import React from "react";
import NavBarItem from "../navbar-item/navbar-item.component";
import "./navbar.styles.css";

const NavBar = ({ brandText, brandUrl, items }) => (
  <header className="main__header">
    <div className="navbar__brand">
      <a className="navbar__brand__text" href={brandUrl}>{brandText}</a>
    </div>
    <nav className="navbar">
      <ul className="navbar__items">
        {items.map((item) => (
          <NavBarItem key={item.content} itemUrl={item.url} itemText={item.content} />
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
