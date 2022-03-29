import React from "react";
import { getAbility } from "../../utils/pokemonList";
import "./ability-box.styles.css";

const AbilityBox = ({ abilityName }) => {
  const ability = getAbility(abilityName);
  console.log(ability);
  return (
    <div className="stats-abilities__item">
      <div className="stats-abilities__item-title">{ability.name}</div>
      <div className="stats-abilities__item-content">
        {ability.effect_entries.find((effect) => effect.language.name == "en").effect}
      </div>
      <button className={"stats-abilities__item-button"}>Read More</button>
    </div>
  );
};

export default AbilityBox;
