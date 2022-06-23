import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.css";
import { connect } from "react-redux";

const CartDropdown = ({team, matchup}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <div className="cart-team">
          {console.table(team)}
        </div>
      </div>
      <CustomButton innerText="GO TO ACCOUNT'S PAGE" />
    </div>
  );
};

const mapStateToProps = ({ team, matchup }) => ({
  team,
  matchup,
});

export default connect(mapStateToProps)(CartDropdown);
