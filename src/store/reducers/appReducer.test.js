import {
  renderingPaintingsTypes,
  renderingDetailsPaintingTypes,
} from "../actions/AppActionsTypes";
import appReducer from "./appReducer";

describe("Given an AppReducer function", () => {
  describe("When it receives an object with a painting information and an action to render", () => {
    test("Then it should return that same object with the property 'loading' with the value 'false'", () => {
      const paintingDetails = {
        title: "Portrait of a Woman, Possibly Maria Trip",
        objectTypes: ["painting"],
        plaqueDescriptionEnglish:
          "Maria Trip, daughter of one of Amsterdam’s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
        principalMaker: "Rembrandt van Rijn",
        principalOrFirstMaker: "Rembrandt van Rijn",
        physicalMedium: "oil on panel",
        longTitle:
          "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
        subTitle: "h 107cm × w 82cm",
      };

      const actionType = {
        type: renderingPaintingsTypes,
        painting: paintingDetails,
      };

      const expectedPaintingDetailsObject = {
        loading: false,
        title: "Portrait of a Woman, Possibly Maria Trip",
        objectTypes: ["painting"],
        plaqueDescriptionEnglish:
          "Maria Trip, daughter of one of Amsterdam’s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
        principalMaker: "Rembrandt van Rijn",
        principalOrFirstMaker: "Rembrandt van Rijn",
        physicalMedium: "oil on panel",
        longTitle:
          "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
        subTitle: "h 107cm × w 82cm",
      };

      const creatingDetails = appReducer(paintingDetails, actionType);

      expect(creatingDetails).toEqual(expectedPaintingDetailsObject);
    });
  });
  describe("When it receives an object with a painting details information and an action to render the details", () => {
    test("Then it should return that object with the details object and loading status", () => {
      const paintingDetails = {
        paintings: {
          title: "Portrait of a Woman, Possibly Maria Trip",
          objectTypes: ["painting"],
          plaqueDescriptionEnglish:
            "Maria Trip, daughter of one of Amsterdam’s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
          principalMaker: "Rembrandt van Rijn",
          principalOrFirstMaker: "Rembrandt van Rijn",
          physicalMedium: "oil on panel",
          longTitle:
            "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
          subTitle: "h 107cm × w 82cm",
        },
      };

      const actionType = {
        type: renderingDetailsPaintingTypes,
        painting: paintingDetails,
      };

      const expectedPaintingDetailsObject = {
        loading: false,
        painting: {
          paintings: {
            title: "Portrait of a Woman, Possibly Maria Trip",
            objectTypes: ["painting"],
            plaqueDescriptionEnglish:
              "Maria Trip, daughter of one of Amsterdam’s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
            principalMaker: "Rembrandt van Rijn",
            principalOrFirstMaker: "Rembrandt van Rijn",
            physicalMedium: "oil on panel",
            longTitle:
              "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
            subTitle: "h 107cm × w 82cm",
          },
        },
        paintings: {
          longTitle:
            "Portrait of a Woman, Possibly Maria Trip, Rembrandt van Rijn, 1639",
          objectTypes: ["painting"],
          physicalMedium: "oil on panel",
          plaqueDescriptionEnglish:
            "Maria Trip, daughter of one of Amsterdam’s wealthiest merchants, was twenty when Rembrandt painted her portrait. The artist placed Maria against a stone arch and devoted particular attention to the reflected light, the fashionable dress and jewellery. The costly garments are trimmed with strips of gold lace and Maria is wearing a profusion of pearls.",
          principalMaker: "Rembrandt van Rijn",
          principalOrFirstMaker: "Rembrandt van Rijn",
          subTitle: "h 107cm × w 82cm",
          title: "Portrait of a Woman, Possibly Maria Trip",
        },
      };

      const creatingDetails = appReducer(paintingDetails, actionType);

      expect(creatingDetails).toEqual(expectedPaintingDetailsObject);
    });
  });
});
