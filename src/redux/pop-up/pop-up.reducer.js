import { PopupActionTypes } from "./pop-up.types";
const INITIAL_STATE = {
    numberOfPopups: 0,
    popups: [],
}
// This is the pattern of a popup, of these values the only one that can't change is the title.
const POPUP_PATTERN = {
    title: "",
    visible: false,
    data: {},
}

export const popupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PopupActionTypes.ADD_POPUP:
            const { popup: addPopup } = action.payload;
            const { title: addTitle, data: addData, visible: addVisible } = addPopup;
            if (addTitle !== "" && addTitle && addData && addVisible !== undefined) {

                return {
                    numberOfPopups: state.numberOfPopups + 1,
                    popups: [...state.popups, addPopup]
                }
            }
            return {
                ...state
            }
        case PopupActionTypes.CHANGE_POPUP:
            const { popup: changePopup } = action.payload;
            const { title: changeTitle, data: changeData, visible: changeVisible } = changePopup;
            const popupIndex = state.popups.findIndex((popup) => popup.title === changeTitle);

            if (popupIndex !== -1) {
                state.popups[popupIndex] = changePopup;
            }
            return {
                ...state
            }
        default: 
            return{
                ...state
            }        
    }
}