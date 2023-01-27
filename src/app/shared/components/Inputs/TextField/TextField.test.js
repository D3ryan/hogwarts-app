import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TextField from "./TextField";

describe("Textfield", () => {
  test("renders textfield correctly", () => {
    render(<TextField />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });

  test("renders textfield with label", () => {
    render(<TextField label="any" id="textfield" />);
    const radioElement = screen.getByLabelText("any");
    expect(radioElement).toBeInTheDocument();
  });

  test("Triggers the onChange event passed by props", async ()=> {
    const anyFunction = jest.fn();
    render(<TextField onChange={anyFunction}/>);
    const element = screen.getByRole("textbox");
    await user.type(element, "Hello")
    expect(anyFunction).toHaveBeenCalled();
  })
});
