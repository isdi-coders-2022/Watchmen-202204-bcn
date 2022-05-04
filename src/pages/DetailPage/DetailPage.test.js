import { BrowserRouter } from "react-router-dom";
import DetailPage from "./DetailPage";
const { render, screen } = require("@testing-library/react");
describe("Given a DetailPage Component", () => {
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 8 list elements", () => {
      render(
        <BrowserRouter>
          <DetailPage />
        </BrowserRouter>
      );

      const expectedNumOfLi = 9;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
