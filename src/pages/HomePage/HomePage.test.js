import HomePage from "./HomePage";
const { render, screen } = require("@testing-library/react");
describe("Given a HomePage Component", () => {
  describe("When it's invoked with his given Header Component)", () => {
    test("Then it should render a HomePage with 4 list elements", () => {
      render(<HomePage />);

      const expectedNumOfLi = 4;

      const totalList = screen.getAllByRole("listitem");

      expect(totalList.length).toBe(expectedNumOfLi);
    });
  });
  describe("When it's invoked with his given Button Component)", () => {
    test("Then it should render a HomePage with onlu 1 Button element", () => {
      render(<HomePage />);

      const expectedButtonElement = 1;

      const totalList = screen.getAllByRole("button");

      expect(totalList.length).toBe(expectedButtonElement);
    });
  });
});
