import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CancelIcon from "./Cancel";

describe("CancelIcon", () => {

  test("renders cancelIcon correctly", () => {
    render(<CancelIcon />);
    const element = screen.getByTestId("svg");
    expect(element).toBeInTheDocument();
  });

  test("Triggers the onClick event passed by props", async () => {
    const anyFunction = jest.fn();
    render(<CancelIcon onClick={anyFunction} />);
    const element = screen.getByTestId("svg");
    await user.click(element);
    expect(anyFunction).toHaveBeenCalled();
  });
});
