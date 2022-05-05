import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
  renderingPaintingsTypes,
} from "./AppActionsTypes";

export const renderingPaintings = (paintings) => ({
  type: renderingPaintingsTypes,
  paintings,
});

export const addPaintings = (painting) => ({
  type: addPaintingsTypes,
  painting,
});

export const deletePaintings = (indexToRemove) => ({
  type: deletePaintingsTypes,
  indexToRemove,
});

export const editPaintings = (painting) => ({
  type: editPaintingsTypes,
  painting,
});
