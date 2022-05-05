import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CollectionPage2 from "./CollectionPage2";
import PaintsProvider from "../../store/providers/paintsProvider";

describe("Given a CollectionPage Component", () => {
  describe("When it's invoked with his given Header Component", () => {
    test("Then it should render a HomePage with 24 list elements", () => {
      const expectedNumOfLi = 25;

      render(
        <BrowserRouter>
          <PaintsProvider>
            <CollectionPage2 />
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
