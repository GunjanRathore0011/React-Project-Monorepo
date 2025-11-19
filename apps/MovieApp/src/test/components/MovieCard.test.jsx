import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import MovieCard from "../../components/MovieCard";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => [{
    Title: "Harry Potter",
    Year: "2001",
    Poster: "poster.jpg",
    imdbID: "tt1111",
  }],
}));

jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

jest.mock("../../redux/likeSlice", () => ({
  addLike: jest.fn((movie) => ({ type: "addLike", payload: movie })),
  removeLike: jest.fn((movie) => ({ type: "removeLike", payload: movie })),
}));

describe("MovieCard Component", () => {
  const movie = {
    Title: "Harry Potter",
    Year: "2001",
    Poster: "poster.jpg",
    imdbID: "tt1111",
  };

  test("renders movie details", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText("2001")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "poster.jpg");
  });

  test("navigates to detail page when clicked", () => {
    render(<MovieCard movie={movie} />);

    const clickable = screen.getByTestId("movie-card");
    fireEvent.click(clickable);

    expect(mockNavigate).toHaveBeenCalledWith("/movie/tt1111");
  });

  test("dispatches removeLike when already liked", () => {
    render(<MovieCard movie={movie} />);

    const heart = screen.getByTestId("heart-icon");
    fireEvent.click(heart);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "removeLike",
      payload: movie,
    });

  });
});
