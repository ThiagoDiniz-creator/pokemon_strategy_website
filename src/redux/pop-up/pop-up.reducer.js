import { PopupActionTypes } from "./pop-up.types";
const INITIAL_STATE = {
  numberOfPopups: 0,
  popups: [],
};
// This is the pattern of a popup, of these values the only one that can't change is the title.
export const POPUP_PATTERN = {
  title: "",
  visible: false,
  data: {},
};


const checkForDuplicity = (array) => {
    array.filter()
}


export const popupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopupActionTypes.ADD_POPUP:
      const { popup: addPopup } = action.payload;
      const { title: addTitle, data: addData, visible: addVisible } = addPopup;
      if (addTitle !== "" && addTitle && addData && addVisible !== undefined) {
        if (
          state.popups.find(({ title }) => title === addTitle) !== undefined ||
          state.numberOfPopups === 0
        ) {
          return {
            numberOfPopups: state.numberOfPopups + 1,
            popups: [...state.popups, addPopup],
          };
        } else {
          return {
            ...state,
          };
        }
      } else {
        return {
          ...state,
        };
      }
    case PopupActionTypes.CHANGE_POPUP:
      const { popup: changePopup } = action.payload;
      const { title: changeTitle } = changePopup;
      const popupIndex = state.popups.findIndex(
        (popup) => popup.title === changeTitle
      );



      if (popupIndex === -1) {
        return {
          ...state,
        };
      } else {
        const arrayRef = [...state.popups];
        arrayRef[popupIndex] = changePopup;

        return {
          ...state,
          popups: [...arrayRef],
        };
      }
    default:
      return {
        ...state,
      };
  }
};

