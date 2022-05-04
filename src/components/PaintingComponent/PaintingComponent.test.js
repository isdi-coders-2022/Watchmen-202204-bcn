const { render, screen } = require("@testing-library/react");
const { default: PaintingComponent } = require("./PaintingComponent");

describe("Given a PaintingComponent Component", () => {
  describe("When it's call)", () => {
    test("Then it should render a PaintingComponent with 1 li item", () => {
      render(<PaintingComponent />);

      const expectedNumOfLi = 3;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
