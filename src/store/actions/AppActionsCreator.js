import {
  addPaintingsTypes,
  deletePaintingsTypes,
  fetchingPaintingsTypes,
  renderingPaintingsTypes,
  renderingDetailsPaintingTypes,
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

export const renderingDetailsPainting = (painting) => ({
  type: renderingDetailsPaintingTypes,
  painting,
});

export const deletePaintings = (indexToRemove) => ({
  type: deletePaintingsTypes,
  indexToRemove,
});
