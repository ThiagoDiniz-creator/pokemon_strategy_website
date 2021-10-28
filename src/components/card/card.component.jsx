//Importing React
import React from "react";
import { Link, withRouter } from "react-router-dom";

//Importing styles
import "./card.styles.css";

const Card = ({ pokemon, handleClick, ...otherProps }) => {
  return (
    <Link to={{ pathname: `/pokemon/${pokemon.name}` }}>
      <div className="card-container" {...otherProps}>
        <img className="card-image" src={pokemon.sprite} alt={pokemon.name} />

        <div className="card-header">
          <div className="card-text__name">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </div>
          <div className="card-text__number">{"#" + pokemon.id}</div>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(Card);
