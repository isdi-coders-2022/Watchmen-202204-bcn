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

export const addPaintings = (newPainting) => ({
  type: addPaintingsTypes,
  newPainting,
});

export const renderingDetailsPainting = (painting) => ({
  type: renderingDetailsPaintingTypes,
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
