import { BrowserRouter } from "react-router-dom";
import CollectionPage from "./CollectionPage";
const { render, screen } = require("@testing-library/react");
describe("Given a CollectionPage Component", () => {
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 24 list elements", () => {
      render(
        <BrowserRouter>
          <CollectionPage />
        </BrowserRouter>
      );

      const expectedNumOfLi = 24;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
