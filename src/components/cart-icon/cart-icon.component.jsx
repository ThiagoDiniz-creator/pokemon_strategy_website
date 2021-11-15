import React from "react";
import { ReactComponent as CartIconSvg } from "../../assets/cart-icon.svg";
import { connect } from "react-redux";
import "./cart-icon.styles.css";

const CartIcon = ({ pokemonTeam }) => (
    <CartIconSvg className="cart-icon" />
);

const mapStateToProps = (state) => ({
  pokemonTeam: state.pokemonTeam,
});

export default connect(mapStateToProps)(CartIcon);
