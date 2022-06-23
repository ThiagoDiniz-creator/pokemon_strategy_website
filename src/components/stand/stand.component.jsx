import React from "react";
import "./stand.styles.css";
import { connect } from "react-redux";
import MinusIcon from "../minus-icon/minus-icon.component";
import CogIcon from "../cog-icon/cog-icon.component";
import {
  removePokemon,
  changePokemon as changePokemonExternal,
} from "../../redux/pokemon_team/pokemon_team.actions";
import { useState } from "react";
import DescriptionBox from "../description-box/description-box.component";
import {
  addPopup as addPopupExternal,
  changePopup as changePopupExternal,
} from "../../redux/pop-up/pop-up.actions.js";
import ConfigScreenComponent from "../config-screen/config-screen.component";

const Stand = ({
  pokemonTeam,
  removePokemonStand,
  changePopup,
  addPopup,
  popup: popupData,
}) => {
  const POPUP_TITLE = "pokemon-stat-configuration-popup";

  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [wasPopupAdded, setWasPopupAdded] = useState(
    popupData.popups.find(({ title }) => title === POPUP_TITLE) !== undefined
  );
  const [popup, setPopup] = useState(
    wasPopupAdded
      ? popupData.popups.find(({ title }) => title === POPUP_TITLE)
      : undefined
  );

  if (!wasPopupAdded) {
    const popup = {
      title: POPUP_TITLE,
      visible: false,
      data: {},
    };

    addPopup({ popup });
    setWasPopupAdded(true);
    setPopup(popup);
  }

  return (
    <div className="stand">
      <ul className="stand-list">
        {pokemonTeam.pokemons.length > 0 ? (
          pokemonTeam.pokemons.map((pokemon, idx) => {
            return (
              <li key={idx + "_KEY"} className="stand-list__element">
                <img src={pokemon.sprite} alt={pokemon.name} />
                <div>{pokemon.name}</div>
                <div className="stand-list__button-holder">
                  <MinusIcon
                    handleClick={() => {
                      removePokemonStand(pokemon.id, idx);
                    }}
                  />
                  <CogIcon
                    handleClick={() => {
                      setSelectedPokemon(pokemon);
                      popup.visible = true;
                      changePopup({ popup });
                    }}
                  />
                </div>
              </li>
            );
          })
        ) : (
          undefined
        )}
      </ul>
      <DescriptionBox
        title={"Data"}
        popupTitle={POPUP_TITLE}
        subtitle={
          selectedPokemon
            ? selectedPokemon.name.charAt(0).toUpperCase() +
              selectedPokemon.name.slice(1)
            : ""
        }
        children={
          selectedPokemon !== false ? (
            <ConfigScreenComponent pokemon={selectedPokemon} />
          ) : null
        }
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removePokemonStand: (id, index) => dispatch(removePokemon(id, index)),
  changePokemon: (pokemon, randomIdentifier) =>
    dispatch(changePokemonExternal(pokemon, randomIdentifier)),
  addPopup: (popup) => dispatch(addPopupExternal(popup)),
  changePopup: (popup) => dispatch(changePopupExternal(popup)),
});

const mapStateToProps = ({ pokemonTeam, popup }) => ({ pokemonTeam, popup });

export default connect(mapStateToProps, mapDispatchToProps)(Stand);
