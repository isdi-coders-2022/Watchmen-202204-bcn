import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
} from "./AppActionsTypes";

export const addPaintings = (painting) => ({
  type: addPaintingsTypes.addPaintings,
  painting,
});

export const deletePaintings = (painting) => ({
  type: deletePaintingsTypes.deletePaintings,
  painting,
});

export const editPaintings = (painting) => ({
  type: editPaintingsTypes.editPaintings,
  painting,
});
