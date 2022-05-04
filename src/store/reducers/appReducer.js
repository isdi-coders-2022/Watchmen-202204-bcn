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
        painting: "Here we'll be the addPaintinfFunction",
      };
      break;
    case deletePaintingsTypes.deletePaintings:
      newState = {
        ...currentState,
        painting: "Here we'll be the deletePaintinfFunction",
      };
      break;
    case editPaintingsTypes.editPaintings:
      newState = {
        ...currentState,
        painting: "Here we'll be the editPaintinfFunction",
      };
      break;
    default:
      newState = [...currentState];
  }
  return newState;
};

export default appReducer;
