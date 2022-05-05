import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
} from "./AppActionsTypes";

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
