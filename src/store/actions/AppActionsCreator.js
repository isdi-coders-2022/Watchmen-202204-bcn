import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
} from "./AppActionsTypes";

export const addPaintings = () => ({
  type: addPaintingsTypes.addPaintings,
});

export const deletePaintings = () => ({
  type: deletePaintingsTypes.deletePaintings,
});

export const editPaintings = () => ({
  type: editPaintingsTypes.editPaintings,
});
