import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FileInput from "./FileInput";

describe("FileInput", () => {
  test("renders the custom label-button correctly", () => {
    render(<FileInput />);
    const labelElement = screen.getByTestId("label-container");
    expect(labelElement).toBeInTheDocument();
  });

  test("Uploads a file correctly", async () => {
    const anyFile = new File(["any"], "any.png", { type: "image/png" });
    render(<FileInput />);
    const inputElement = screen.getByTestId("file");
    await userEvent.upload(inputElement, anyFile);
    expect(inputElement.files[0]).toStrictEqual(anyFile);
  });

  test("Triggers the onChange parent function", async () => {
    const anyFunction = jest.fn();
    const anyFile = new File(["any"], "any.png", { type: "image/png" });
    render(<FileInput onChange={anyFunction}/>);
    const inputElement = screen.getByTestId("file");
    await userEvent.upload(inputElement, anyFile);
    expect(anyFunction).toHaveBeenCalled();
  });
});
