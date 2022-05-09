import { BrowserRouter } from "react-router-dom";
import FormPage from "./FormPage";
import PaintsProvider from "../../store/providers/paintsProvider";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage Component", () => {
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 4 list elements", () => {
      render(
        <BrowserRouter>
          <PaintsProvider>
            <FormPage />
          </PaintsProvider>
        </BrowserRouter>
      );

      const expectedNumOfLi = 5;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
