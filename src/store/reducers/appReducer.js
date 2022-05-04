import actionTypes from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.addPaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    case actionTypes.deletePaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    case actionTypes.editPaintings:
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
