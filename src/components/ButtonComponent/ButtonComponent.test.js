import ButtonComponent from "./ButtonComponent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given an Button component", () => {
  describe("When it receives a text 'Welcome''", () => {
    test("Then it should show a button with the given text", () => {
      const buttonText = "Welcome";

      render(<ButtonComponent text={buttonText}></ButtonComponent>);
      const textElement = screen.getByRole("button");
      expect(textElement).toHaveTextContent(buttonText);
    });
  });
});
