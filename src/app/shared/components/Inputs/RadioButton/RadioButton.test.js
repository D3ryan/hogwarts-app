import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import RadioButton from "./RadioButton";

describe("Radio", () => {
  test("renders radio button correctly", () => {
    render(<RadioButton />);
    const radioElement = screen.getByRole("radio");
    expect(radioElement).toBeInTheDocument();
  });

  test("renders radio button with label", () => {
    render(<RadioButton label="label" id="radio"/>);
    const radioElement = screen.getByLabelText("label");
    expect(radioElement).toBeInTheDocument();
  });

  test("Checks radio button correctly", async () => {
    render(<RadioButton />);
    const radioElement = screen.getByRole("radio");
    await user.click(radioElement);
    expect(radioElement.checked).toEqual(true);
  });

});
