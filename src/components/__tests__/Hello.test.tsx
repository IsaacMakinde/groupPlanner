import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "../ui/Hello";

test("renders hello message", () => {
  render(<Hello />);
  const helloElement = screen.getByText(/Hello/i);
  expect(helloElement).toBeInTheDocument();
});
