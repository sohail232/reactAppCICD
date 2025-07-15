import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("renders with default name", () => {
  render(<Greet />);
  expect(screen.getByText(/hello, guest/i)).toBeInTheDocument();
});

test("renders with provided name", () => {
  render(<Greet name="Sohail" />);
  expect(screen.getByText(/hello, sohail/i)).toBeInTheDocument();
});
