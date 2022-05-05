import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
  fetchingPaintingsTypes,
  renderingPaintingsTypes,
} from "./AppActionsTypes";

export const fetchingPaintings = () => ({
  type: fetchingPaintingsTypes,
});

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
