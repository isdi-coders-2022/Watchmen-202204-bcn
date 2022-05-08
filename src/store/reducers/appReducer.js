import {
  addPaintingsTypes,
  deletePaintingsTypes,
  fetchingPaintingsTypes,
  renderingDetailsPaintingTypes,
  renderingPaintingsTypes,
} from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case fetchingPaintingsTypes:
      newState = {
        ...currentState,
        loading: true,
      };
      break;
    case renderingPaintingsTypes:
      newState = {
        ...currentState,
        paintings: action.paintings,
        loading: false,
      };
      break;
    case addPaintingsTypes:
      newState = {
        ...currentState,
        paintings: currentState.paintings.concat(action.painting),
      };
      break;
    case deletePaintingsTypes:
      newState = {
        ...currentState,
        paintings: currentState.paintings.filter(
          (_, index) => index !== action.indexToRemove
        ),
      };
      break;
    case renderingDetailsPaintingTypes:
      newState = {
        ...currentState,
        painting: action.painting,
        loading: false,
      };
      break;
    default:
      newState = {
        ...currentState,
      };
  }
  return newState;
};

export default appReducer;
