import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
  fetchingPaintingsTypes,
  renderingPaintingsTypes,
  renderingDetailsPaintingTypes,
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
    case renderingDetailsPaintingTypes:
      newState = [{ ...action.paintings }];
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
        paintings: currentState.paintings.filter(
          (_, i) => i !== action.indexToRemove
        ),
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
