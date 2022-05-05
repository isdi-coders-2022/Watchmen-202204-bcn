import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
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

export const renderingDetailsPainting = (paintings) => ({
  type: renderingDetailsPaintingTypes,
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
