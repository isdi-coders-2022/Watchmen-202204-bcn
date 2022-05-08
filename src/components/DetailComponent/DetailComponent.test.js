import DetailComponent from "./DetailComponent";
import TestRenderer from "react-test-renderer";

describe("Given a Detail Component", () => {
  describe("When it's rendered", () => {
    test("Then it should always match this snaptshot'", () => {
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

      const renderedDetailComponent = TestRenderer.create(
        <DetailComponent painting={paintingDetails} />
      );

      expect(renderedDetailComponent).toMatchSnapshot();
    });
  });
});
