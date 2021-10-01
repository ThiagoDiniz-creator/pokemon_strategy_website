import React from "react";
import "./search-box.styles.css";
import searchIcon from "../../assets/search_icon.svg";

const SearchBox = ({ handleChange, handleClick, clickedButton }) => (
  <div
    className={`search-box-container${clickedButton ? "-active" : ""}`}
    onKeyDown={handleClick}
  >
    <input
      className={`search-box${clickedButton ? "-active" : ""}`}
      onChange={handleChange}
      placeholder="Type the name of your Pokemon"
    />
    <button
      className={`search-box-button${clickedButton ? "-active" : ""}`}
      onClick={handleClick}
    >
      <img
        className={`search-box-button__image${clickedButton ? "-active" : ""}`}
        src={searchIcon}
        alt="search icon"
      />
    </button>
  </div>
);

export default SearchBox;
