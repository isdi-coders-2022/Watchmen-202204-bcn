import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";

describe("Given a FormComponent component", () => {
  describe("When it receives a nameLabel 'Title'", () => {
    test("Then it should render the given nameLabel", () => {
      const nameLabel = "Title";
      render(<FormComponent />);

      const textElement = screen.getByText(nameLabel);
      expect(textElement).toBeInTheDocument(nameLabel);
    });
  });
  describe("When its called to be rendered", () => {
    test("Then it should create a FormComponent Component with a text inside 'Year'", () => {
      const yearLabel = "Year";
      render(<FormComponent />);
      const expectedYearLabel = screen.getByText(yearLabel);
      expect(expectedYearLabel.textContent).toEqual(yearLabel);
    });
  });
});
