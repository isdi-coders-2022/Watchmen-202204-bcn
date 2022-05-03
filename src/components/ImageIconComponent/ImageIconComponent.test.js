import { render, screen } from "@testing-library/react";
import ImageIconComponent from "./ImageIconComponent";

describe("Given a InfoComponent component", () => {
  describe("When it receives a text 'Add Item''", () => {
    test("Then it should render the given text", () => {
      const titleText = "Add Item";

      render(<ImageIconComponent heading1={titleText} />);
      const textElement = screen.getByRole("heading", { name: titleText });

      expect(textElement).toBeInTheDocument();
    });
  });
});
