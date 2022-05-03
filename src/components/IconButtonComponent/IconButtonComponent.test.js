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
          divClassName="test"
        ></IconButtonComponent>
      );
      const elementButton = screen.getByTestId("custom-element");

      userEvent.click(elementButton);
      expect(clickAction).toHaveBeenCalled();
    });
  });
});
