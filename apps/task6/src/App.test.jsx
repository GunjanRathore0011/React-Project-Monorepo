import { render, screen, fireEvent ,act} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import React from "react";

beforeEach(() => {
    jest.useFakeTimers()
})

afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
})

test("Timer expire testing", () => {

    render(<App></App>);

    let headingText= screen.getByText("No. of Clicks until timer expires");
    expect(headingText).toBeInTheDocument();

});

test("Timer testing", ()=>{
    render(<App></App>);

    let timer=screen.getByTestId('Timer');

    expect(timer).toHaveTextContent("Time Left: 10 seconds");

    act(()=>{
        jest.advanceTimersByTime(13000);
    });

    expect(timer).toHaveTextContent("Time Left: 0 seconds");

})

test("Counter testing",()=>{
    render(<App></App>);

    let counterBtn= screen.getByRole('button',{name: "+"});
    fireEvent.click(counterBtn);
    fireEvent.click(counterBtn);
    fireEvent.click(counterBtn);

    let count=screen.getByTestId("count-div");

    expect(count).toHaveTextContent("3");

})