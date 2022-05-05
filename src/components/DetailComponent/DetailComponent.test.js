import { render, screen } from "@testing-library/react";
import PaintsProvider from "../../store/providers/paintsProvider";
import DetailComponent from "./DetailComponent";

describe("Given a InfoComponent component", () => {
  describe("When it receives a text 'Title''", () => {
    test("Then it should render the given text", () => {
      const titleText = "Artwork Details";

      render(
        <PaintsProvider>
          <DetailComponent heading1={titleText} />
        </PaintsProvider>
      );
      const textElement = screen.getByRole("heading", { name: titleText });

      expect(textElement).toBeInTheDocument();
    });
  });
});
