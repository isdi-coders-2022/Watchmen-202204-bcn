import { BrowserRouter } from "react-router-dom";
import App from "./App";
const { render, screen } = require("@testing-library/react");

describe("Given a App Component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a page with a Header element", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const expectedNumberOfHeaders = 1;

      const totalList = screen.getAllByRole("heading");

      expect(totalList.length).toBe(expectedNumberOfHeaders);
    });
  });
});
