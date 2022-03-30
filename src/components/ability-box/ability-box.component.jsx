import React from "react";
import { getAbility } from "../../utils/pokemonList";
import "./ability-box.styles.css";

const AbilityBox = ({ abilities }) => {
  const fetchedAbilities = abilities.map((element) =>{
    const newAbility = getAbility(element.ability.name);
    newAbility.hidden = element.is_hidden;
    return newAbility;
  });

  return (
    <div className="stats-abilities">
      <div className="stats-abilities__title">Abilities</div>
      {fetchedAbilities.map((ability) => {
        return (
          <div className="stats-abilities__item" key={"stats-abilities__item" + ability.name}>
            <div className="stats-abilities__item-title">
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </div>
            <div className="stats-abilities__item-content">
              {
                ability.flavor_text_entry.flavor_text
              }
            </div>
            <button className={"stats-abilities__item-button"}>
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AbilityBox;
