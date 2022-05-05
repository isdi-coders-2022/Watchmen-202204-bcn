import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
  renderingPaintingsTypes,
  renderingDetailsPaintingTypes,
} from "./AppActionsTypes";

export const renderingPaintings = (paintings) => ({
  type: renderingPaintingsTypes,
  paintings,
});

export const renderingDetailsPainting = (paintings) => ({
  type: renderingDetailsPaintingTypes,
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
