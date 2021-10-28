import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({//Define o novo usuário
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetCurrentUser = () => ({//Limpa o usuário atual
  type: userActionTypes.SET_CURRENT_USER,
  payload: null,
});
