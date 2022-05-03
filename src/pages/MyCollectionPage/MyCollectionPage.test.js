import { BrowserRouter } from "react-router-dom";
import MyCollectionPage from "./MyCollectionPage";
const { render, screen } = require("@testing-library/react");

describe("Given a MyCollectionPage Component", () => {
  describe("When it receives a rendering instructions 'faCirclePlus'", () => {
    test("Then it should render a button 'Circle Up' with'", () => {
      render(
        <BrowserRouter>
          <MyCollectionPage />
        </BrowserRouter>
      );

      const elementIconButton = screen.getAllByTestId("custom-element");
      expect(elementIconButton).toBeTruthy();
    });
  });
});
