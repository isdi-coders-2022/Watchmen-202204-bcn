import { render, screen } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";

describe("Given a Header Component", () => {
  describe("When its called to be rendered", () => {
    test("Then it should create a Header Component with a text inside 'Collection 1'", () => {
      const textForComponent = "Collection 1";

      render(<HeaderComponent></HeaderComponent>);

      const displayHeader = screen.getByText(textForComponent);
      expect(displayHeader.textContent).toEqual(textForComponent);
    });
  });
});
