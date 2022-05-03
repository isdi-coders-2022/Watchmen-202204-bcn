import { render, screen } from "@testing-library/react";
import InfoComponent from "./InfoComponent";

describe("Given a InfoComponent component", () => {
  describe("When it receives a text 'COLLECTION ONE''", () => {
    test("Then it should render the given text", () => {
      const titleText = "COLLECTION ONE";

      render(<InfoComponent titleText={titleText}></InfoComponent>);
      const textElement = screen.getByText(titleText);
      expect(textElement).toBeInTheDocument(titleText);
    });
  });
});
