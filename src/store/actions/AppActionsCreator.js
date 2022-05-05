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

export const addPaintings = () => ({
  type: addPaintingsTypes.addPaintings,
});

export const deletePaintings = () => ({
  type: deletePaintingsTypes.deletePaintings,
});

export const editPaintings = () => ({
  type: editPaintingsTypes.editPaintings,
});
