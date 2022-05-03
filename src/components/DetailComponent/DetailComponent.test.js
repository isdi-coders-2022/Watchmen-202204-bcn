import { render, screen } from "@testing-library/react";
import DetailComponent from "./DetailComponent";

describe("Given a InfoComponent component", () => {
  describe("When it receives a text 'Title''", () => {
    test("Then it should render the given text", () => {
      const titleText = "Title";

      render(<DetailComponent heading1={titleText} />);
      const textElement = screen.getByRole("heading", { name: titleText });

      expect(textElement).toBeInTheDocument();
    });
  });
});
