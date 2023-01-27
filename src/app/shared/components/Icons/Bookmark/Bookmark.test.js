import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import BookmarkIcon from "./Bookmark";

describe("BookmarkIcon", () => {
  test("renders bookmarkIcon correctly", () => {
    render(<BookmarkIcon />);
    const element = screen.getByTestId("svg");
    expect(element).toBeInTheDocument();
  });

  test("Triggers the onClick event passed by props", async () => {
    const anyFunction = jest.fn();
    render(<BookmarkIcon onClick={anyFunction} />);
    const element = screen.getByTestId("svg");
    await user.click(element);
    expect(anyFunction).toHaveBeenCalled();
  });
});
