import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("Progress Bar", () => {

    render(<App></App>)
    let headingText = screen.getByText("Progress bar")
    expect(headingText).toBeInTheDocument();

    let input = screen.getByTestId('progress-input');
    let progress = screen.getByTestId('progress-bar');

    expect(progress).toHaveStyle("width: 0%");

    fireEvent.change(input, { target: { value: 70 } });

    expect(progress).toHaveStyle("width: 70%");
});
