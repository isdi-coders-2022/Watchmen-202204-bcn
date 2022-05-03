import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("Given a FormComponent component", () => {
  describe("When it receives a nameLabel 'Link Image'", () => {
    test("Then it should render the given nameLabel", () => {
      const nameLabel = "Link Image";
      render(<FormComponent />);

      const textElement = screen.getByLabelText(nameLabel);
      expect(textElement).toBeInTheDocument();
    });
  });
});
