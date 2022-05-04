import actionTypes from "./AppActionsTypes";

export const nextPaintings = () => ({
  type: actionTypes.nextPaintings,
});

export const previousPaintings = () => ({
  type: actionTypes.previousPaintings,
});

export const addPaintings = () => ({
  type: actionTypes.addPaintings,
});

export const deletePaintings = () => ({
  type: actionTypes.deletePaintings,
});

export const editPaintings = () => ({
  type: actionTypes.editPaintings,
});
