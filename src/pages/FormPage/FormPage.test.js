import { BrowserRouter } from "react-router-dom";
import FormPage from "./FormPage";
const { render, screen } = require("@testing-library/react");

describe("Given a FormPage Component", () => {
  describe("When it receives a rendering instructions", () => {
    test("Then it should render the hole page", () => {
      render(
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      );

      const elementIconButton = screen.getAllByTestId("custom-element");
      expect(elementIconButton).toBeTruthy();
    });
  });
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 8 list elements", () => {
      render(
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      );

      const expectedNumOfLi = 5;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
