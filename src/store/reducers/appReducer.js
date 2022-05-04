import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
} from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case addPaintingsTypes.addPaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    case deletePaintingsTypes.deletePaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    case editPaintingsTypes.editPaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    default:
      newState = [...currentState];
  }
  return newState;
};

export default appReducer;
