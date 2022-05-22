import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CartIconSvg } from "../../assets/cart-icon.svg";
import "./cart-icon.styles.css";

const CartIcon = () => (
  <Link to={"/account"}>
    <CartIconSvg className="cart-icon" />
  </Link>
);

export default CartIcon;
