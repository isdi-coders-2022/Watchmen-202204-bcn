import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CollectionPage from "./CollectionPage";
import PaintsProvider from "../../store/providers/paintsProvider";

describe("Given a CollectionPage Component", () => {
  describe("When it's invoked with his given Header Component", () => {
    test("Then it should render a HomePage with 24 list elements", () => {
      const expectedNumOfLi = 5;

      render(
        <BrowserRouter>
          <PaintsProvider>
            <CollectionPage />
          </PaintsProvider>
        </BrowserRouter>
      );
      setTimeout(async () => {
        const totalList = screen.getAllByRole("listitem");

        expect(totalList.length).toBe(expectedNumOfLi);
      }, 50000);
    });
  });
});
