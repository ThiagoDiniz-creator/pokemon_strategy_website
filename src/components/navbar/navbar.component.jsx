import React from "react";
import NavbarItem from "../navbar-item/navbar-item.component";
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
          <NavbarItem
            key={content}
            itemUrl={url}
            itemText={content}
            handleClick={handleClick}
          />
        ))}
        {additionalComponent.map((component) => (
          <div key={Math.random()} className="generic-container">
            {component}
          </div>
        ))}
      </ul>
    </nav>
  </header>
);

export default NavBar;
