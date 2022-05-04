import { BrowserRouter } from "react-router-dom";
import CollectionPage3 from "./CollectionPage3";
const { render, screen } = require("@testing-library/react");
describe("Given a CollectionPage3 Component", () => {
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 24 list elements", () => {
      render(
        <BrowserRouter>
          <CollectionPage3 />
        </BrowserRouter>
      );

      const expectedNumOfLi = 25;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
