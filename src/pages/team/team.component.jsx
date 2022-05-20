import React from "react";
import { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import SearchBoxWithAutoComplete from "../../components/search-box-with-autocomplete/search-box-with-autocomplete.component";
import Stand from "../../components/stand/stand.component";
import "./team.styles.css";

const Team = () => {
  const [started, setStarted] = useState(false);

  return started ? (
    <div className="team-container">
      <Stand />
      <SearchBoxWithAutoComplete />
    </div>
  ) : (
    <div className="team-container">
      <CustomButton
        innerText={"BUILD"}
        style={{
          backgroundColor: "#FFFFFF",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => setStarted(true)}
      />
    </div>
  );
};

export default Team;
