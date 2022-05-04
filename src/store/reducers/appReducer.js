import actionTypes from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.nextPaintings:
      newState = {
        ...currentState,
        painting: "",
      };
      break;
    case actionTypes.previousPaintings:
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
