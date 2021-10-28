import React from "react";
import { ReactComponent as CartIconSvg } from "../../assets/cart-icon.svg";
import { connect } from "react-redux";

const CartIcon = ({ pokemonTeam }) => (
  <li className="navbar__item" >
    <CartIconSvg style={{ width: "50%", height: "100%" }} />
  </li>
);

const mapStateToProps = (state) => ({
  pokemonTeam: state.pokemonTeam,
});

export default connect(mapStateToProps)(CartIcon);
