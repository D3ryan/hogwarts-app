import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import TrashIcon from "./Trash";

describe("TrashIcon", () => {

  test("renders trashIcon correctly", () => {
    render(<TrashIcon />);
    const element = screen.getByTestId("svg");
    expect(element).toBeInTheDocument();
  });

  test("Triggers the onClick event passed by props", async () => {
    const anyFunction = jest.fn();
    render(<TrashIcon onClick={anyFunction} />);
    const element = screen.getByTestId("svg");
    await user.click(element);
    expect(anyFunction).toHaveBeenCalled();
  });
});
