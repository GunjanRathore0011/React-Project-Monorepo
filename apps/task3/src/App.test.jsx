import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("Testing the add city", () => {
    render(<App />);
    expect(screen.getByText("Hello CodeSandbox")).toBeInTheDocument();

    let inputField = screen.getByPlaceholderText("Add city");
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: "Indore" } });
    expect(inputField.value).toBe("Indore")
    let btn = screen.getByRole('button', { name: 'Add' });
    fireEvent.click(btn)
    fireEvent.change(inputField, { target: { value: "Ujjain" } });
    expect(inputField.value).toBe("Ujjain")
    fireEvent.click(btn)
    fireEvent.change(inputField, { target: { value: "Ratlam" } });
    expect(inputField.value).toBe("Ratlam")
    fireEvent.click(btn)


    let listies = screen.getByRole('list');

    let cities = screen.getAllByRole("listitem")

    expect(cities[0]).toHaveTextContent("Indore");

    // remove city functionality...
    let removeBtn = screen.getAllByText("X");
    fireEvent.click(removeBtn[1]);

    let citiesAfterRender = screen.getAllByRole("listitem")

    expect(citiesAfterRender[0]).toHaveTextContent("Indore");
    expect(citiesAfterRender[1]).toHaveTextContent("Ratlam");

});

