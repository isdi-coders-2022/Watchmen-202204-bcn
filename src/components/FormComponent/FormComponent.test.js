import { render, screen } from "@testing-library/react";
import FormComponent from "./FormComponent";
import PaintsProvider from "../../store/providers/paintsProvider";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a FormComponent component", () => {
  describe("When it receives a nameLabel 'Link Image'", () => {
    test("Then it should render the given nameLabel", () => {
      const nameLabel = "Link Image";
      render(
        <BrowserRouter>
          <PaintsProvider>
            <FormComponent />
          </PaintsProvider>
        </BrowserRouter>
      );

      const textElement = screen.getByLabelText(nameLabel);
      expect(textElement).toBeInTheDocument();
    });
  });
});
