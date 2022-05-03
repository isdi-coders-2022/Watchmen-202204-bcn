import IconButtonComponent from "./IconButtonComponent";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given an IconButton component", () => {
  describe("When it receives a click action'", () => {
    test("Then it should invoke any given function", () => {
      const clickAction = jest.fn();

      render(
        <IconButtonComponent
          iconName={faCirclePlus}
          action={clickAction}
        ></IconButtonComponent>
      );
      const elementIconButton = screen.getByTestId("custom-element");

      userEvent.click(elementIconButton);
      expect(clickAction).toHaveBeenCalled();
    });
  });
  describe("When it receives a rendering instructions 'faCirclePlus''", () => {
    test("Then it should render a button 'Circle Up' with'", () => {
      const fontAwesomeRenderingInstruction = faCirclePlus;

      render(
        <IconButtonComponent
          iconName={fontAwesomeRenderingInstruction}
        ></IconButtonComponent>
      );
      const elementIconButton = screen.getByTestId("custom-element");
      expect(elementIconButton).toBeTruthy();
    });
  });
});
