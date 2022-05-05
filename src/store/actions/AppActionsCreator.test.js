import {
  addPaintings,
  deletePaintings,
  editPaintings,
} from "./AppActionsCreator";

import {
  addPaintingsTypes,
  deletePaintingsTypes,
  editPaintingsTypes,
} from "./AppActionsTypes";

describe("Given a addPaintings function", () => {
  describe("When it's called", () => {
    test("Then it should return an object", () => {
      const expectedResult = {
        type: addPaintingsTypes,
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
        type: deletePaintingsTypes,
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
        type: editPaintingsTypes,
      };

      const receivedResult = editPaintings();

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
