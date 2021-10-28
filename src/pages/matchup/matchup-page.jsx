import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./matchup-page.styles.css";

const MatchupPage = () => (
  <div className="matchup-page">
      <CustomButton
        innerText={"Your team"}
        style={{
          backgroundColor: "#ff6b35",
          color: "white",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => alert("Your team")}
      />
      <CustomButton
        innerText={"Both teams"}
        style={{
          backgroundColor: "#FFFFFF",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => alert("Oppostion's team")}
      />

      <CustomButton
        innerText={"Opposition team"}
        style={{
          backgroundColor: "#758bfd",
          color: "white",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => alert("Opposition's team")}
      />
  </div>
);

export default MatchupPage;
