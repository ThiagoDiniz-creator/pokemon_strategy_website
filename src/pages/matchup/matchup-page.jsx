import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import SearchBoxWithAutocompleteComponent from "../../components/search-box-with-autocomplete/search-box-with-autocomplete.component";
import "./matchup-page.styles.css";

const MatchupPage = () => {
  const [started, setStarted] = useState(false);

  return !started ? (
    <div className="matchup-page">
      <CustomButton
        innerText={"Start"}
        style={{
          backgroundColor: "#FFFFFF",
          fontSize: "150%",
          width: "25%",
        }}
        onClick={() => setStarted(true)}
      />
    </div>
  ) : (
    <div className="matchup-page">
      <div className="matchup-page__left">
      </div>
      <div className="matchup-page__center">
        <SearchBoxWithAutocompleteComponent />
        </div>
      <div className="matchup-page__right">
        
      </div>
    </div>
  );
};

export default MatchupPage;
