import React from "react";
import NavBarItem from "../navbar-item/navbar-item.component";
import "./navbar.styles.css";

const NavBar = ({ brandText, brandUrl, items, additionalComponent }) => (
  <header className="main__header">
    <div className="navbar__brand">
      <a className="navbar__brand__text" href={brandUrl}>
        {brandText}
      </a>
    </div>
    <nav className="navbar">
      <ul className="navbar__items">
        {items.map(({ content, url, handleClick }) => (
          <NavBarItem
            key={content}
            itemUrl={url}
            itemText={content}
            handleClick={handleClick}
          />
        ))}
        {additionalComponent.map((component) => component)}
      </ul>
    </nav>
  </header>
);

export default NavBar;
