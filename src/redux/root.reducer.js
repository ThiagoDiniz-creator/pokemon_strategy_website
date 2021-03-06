import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { pokemonTeamReducer } from "./pokemon_team/pokemon_team.reducer";
import { popupReducer } from "./pop-up/pop-up.reducer";
import { matchupReducer } from "./matchup/matchup.reducer";

export default combineReducers({
  //Esta função recebe um objeto com os reducers e transforma-os em um objeto utilizável pelo react-redux
  user: userReducer,
  pokemonTeam: pokemonTeamReducer,
  popup: popupReducer,
  matchup: matchupReducer,
});
