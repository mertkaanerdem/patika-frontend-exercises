import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

import Header from "./Header";

test("header title", () => {
  render(<Header />);

  const title = screen.getByText("Emoji Search");
  expect(title).toBeInTheDocument();
});
