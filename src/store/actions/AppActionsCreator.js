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

export const deletePaintings = (painting) => ({
  type: deletePaintingsTypes,
  painting,
});

export const editPaintings = (painting) => ({
  type: editPaintingsTypes,
  painting,
});
