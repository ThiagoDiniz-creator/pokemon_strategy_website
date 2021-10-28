import React from "react";
import SearchBoxWithAutoComplete from "../../components/search-box-with-autocomplete/search-box-with-autocomplete.component";
import Stand from "../../components/stand/stand.component";
import "./team.styles.css";

const Team = () =>(
    <div className="team-container">
        <Stand />
        <SearchBoxWithAutoComplete />
    </div>
)

export default Team;