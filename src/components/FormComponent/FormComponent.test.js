import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("Given a FormComponent component", () => {
  describe("When it receives a nameLabel 'Title'", () => {
    test("Then it should render the given nameLabel", () => {
      render(<FormComponent />);

      const textElement = screen.getByLabelText();
      expect(textElement).toBeInTheDocument();
    });
  });
});
