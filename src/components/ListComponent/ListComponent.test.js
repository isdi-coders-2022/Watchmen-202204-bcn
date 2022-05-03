const { render, screen } = require("@testing-library/react");
const { default: ListComponent } = require("./ListComponent");

describe("Given a ListComponent Component", () => {
  describe("When it's call)", () => {
    test("Then it should render a ListComponent with 3 li item", () => {
      render(<ListComponent />);

      const expectedNumOfLi = 3;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
});
