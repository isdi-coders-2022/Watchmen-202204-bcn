import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
  renderingPaintingsTypes,
} from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case renderingPaintingsTypes:
      newState = [...action.paintings];
      break;
    case addPaintingsTypes:
      newState = {
        ...currentState,
        painting: currentState.concat(action.paintings),
      };
      break;
    case deletePaintingsTypes:
      newState = {
        ...currentState,
        painting: currentState.slice(0, action.paintings),
      };
      break;
    case editPaintingsTypes:
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
