import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

test("Form testing", () => {

    render(<App></App>)
    let headingText = screen.getByText("Details")
    expect(headingText);

    let userName = screen.getByPlaceholderText('Enter name')
    fireEvent.change(userName, { target: { value: "Gunjan" } })

    let fullName = screen.getByPlaceholderText('Enter full name')
    fireEvent.change(fullName, { target: { value: "Gunjan Rathore" } })

    let age = screen.getByPlaceholderText('Enter age')
    fireEvent.change(age, { target: { value: "20" } })

    let submit = screen.getByRole('button', { name: "Submit" });
    fireEvent.click(submit);

    let details = screen.getAllByRole("listitem");

    expect(details[0]).toHaveTextContent(userName.value);
    expect(details[1]).toHaveTextContent(fullName.value);
    expect(details[2]).toHaveTextContent(age.value);

});