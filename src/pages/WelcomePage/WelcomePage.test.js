import { BrowserRouter } from "react-router-dom";
import Welcome from "./WelcomePage";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked with his given Header and List Component)", () => {
    test("Then it should render a Welcome page with 4 list elements", () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );

      const expectedNumOfLi = 7;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
  describe("When it's invoked with his given List Component)", () => {
    test("Then it should render a Welcome page with 4 headers", () => {
      render(
        <BrowserRouter>
          <Welcome />
        </BrowserRouter>
      );

      const expectedNumberOfHeaders = 4;

      const totalList = screen.getAllByRole("heading");

      expect(totalList.length).toBe(expectedNumberOfHeaders);
    });
  });
});
