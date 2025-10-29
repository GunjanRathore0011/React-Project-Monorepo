import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("Toggle testing", () => {
  render(<App />);
  expect(screen.getByText("Welcome to the react challenge")).toBeInTheDocument();

  const button = screen.getByRole("button", { name: /show \/ hide/i });
  fireEvent.click(button);
  expect(screen.queryByText("Welcome to the react challenge")).not.toBeInTheDocument();

  fireEvent.click(button);
  expect(screen.getByText("Welcome to the react challenge")).toBeInTheDocument();

});
