import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

describe("Given a Header Component", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a Header Component with four list components", () => {
      render(
        <BrowserRouter>
          <HeaderComponent />
        </BrowserRouter>
      );

      const displayHeader = screen.getAllByRole("listitem");
      expect(displayHeader.length).toBe(4);
    });
  });
});
