import { PopupActionTypes } from "./pop-up.types";

export const addPopup = (popup) => ({
    type: PopupActionTypes.ADD_POPUP,
    payload: popup
})

export const changePopup = (popup) => ({
    type: PopupActionTypes.CHANGE_POPUP,
    payload: popup
})