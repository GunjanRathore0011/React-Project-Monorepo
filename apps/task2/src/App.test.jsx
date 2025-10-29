import { render, screen, fireEvent, act } from "@testing-library/react";
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
test("Timer testing", () => {

    render(<App></App>);

    let text = screen.getByText("Timer");
    expect(text).tobeInTheDocument;

    expect(screen.getByText("Timer")).toBeInTheDocument();
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("0 secs")).toBeInTheDocument();

});

test("Start Timer testing", ()=>{

    render(<App></App>)
    const startButton = screen.getByText("Start");

    fireEvent.click(startButton);

    act(() => {
        jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("3 secs")).toBeInTheDocument();


});

test("Stop Timer testing", ()=>{

    render(<App></App>)
    const startButton = screen.getByText("Start");
    const stopButton = screen.getByText("Stop");

    fireEvent.click(startButton);
    act(() => {
        jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("3 secs")).toBeInTheDocument();

    fireEvent.click(stopButton);
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("3 secs")).toBeInTheDocument();    
});

test("Reset Timer testing", ()=>{

    render(<App></App>)
    const startButton = screen.getByText("Start");
    const resetButton = screen.getByText("Reset");

    fireEvent.click(startButton);
    act(() => {
        jest.advanceTimersByTime(3000);
    });
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("3 secs")).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText("0 mins")).toBeInTheDocument();
    expect(screen.getByText("0 secs")).toBeInTheDocument();    
});