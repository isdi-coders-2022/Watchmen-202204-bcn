import {
  paintingDataTestPage1,
  paintingDataTestPage3,
} from "../../dataTest/paintingData";
import actionTypes from "../actions/AppActionsTypes";

const appReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.nextPaintings:
      newState = {
        ...currentState,
        painting: paintingDataTestPage3,
      };
      break;
    case actionTypes.previousPaintings:
      newState = {
        ...currentState,
        painting: paintingDataTestPage1,
      };
      break;
    default:
      newState = [...currentState];
  }
  return newState;
};

export default appReducer;
