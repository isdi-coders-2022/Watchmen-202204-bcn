const { render, screen } = require("@testing-library/react");
const { BrowserRouter } = require("react-router-dom");
const { default: LoadingComponent } = require("./LoadingComponent");

describe("Given a ListComponent Component", () => {
  describe("When it's call)", () => {
    test("Then it should render a ListComponent with 1 svg item", () => {
      render(
        <BrowserRouter>
          <LoadingComponent />
        </BrowserRouter>
      );
      const elementIconButton = screen.getByTestId("custom-element");
      expect(elementIconButton).toBeTruthy();
    });
  });
});
