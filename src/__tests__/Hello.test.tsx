import { render, screen } from "@testing-library/react";
import Hello from "../components/Hello";

test("renders hello message", () => {
  render(<Hello />);
  const helloElement = screen.getByText(/Hello/i);
  expect(helloElement).toBeInTheDocument();
});
