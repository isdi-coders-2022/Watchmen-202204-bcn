import {
  addPaintings,
  deletePaintings,
  editPaintings,
} from "./AppActionsCreator";
import actionTypes from "./AppActionsTypes";

describe("Given a addPaintings function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.addPaintings,
      };

      const receivedResult = addPaintings();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a deletePaintings function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.deletePaintings,
      };

      const receivedResult = deletePaintings();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a editPaintings function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: actionTypes.editPaintings,
      };

      const receivedResult = editPaintings();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
