import { render, screen, fireEvent, getByPlaceholderText, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import AllMovies from "../../pages/AllMovies";
import React from "react";

jest.mock('axios');

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: () => jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));



describe(" movie testing...", () => {
    beforeEach(() => {
        require("react-redux").useSelector.mockImplementation((fn) =>
            fn({
                likes: {
                    likedMovies: [],
                },
            })
        );

        axios.get.mockResolvedValue({
            data: {
                Response: "True",
                Search: [
                    { imdbID: "1", Title: "Harry 1" },
                    { imdbID: "2", Title: "Harry 2" },
                ],
            },
        });
    });
    test("Searching moive...", async () => {
        const mockMovies = [
            {
                Title: "Harry Potter 1",
                Year: "2001",
                imdbID: "tt0241527",
                Poster: "poster1.jpg",
            },
            {
                Title: "Harry Potter 2",
                Year: "2002",
                imdbID: "tt0295297",
                Poster: "poster2.jpg",
            },
        ];

        axios.get.mockResolvedValueOnce({
            data: {
                Response: "True",
                Search: mockMovies,
            }
        })


        render(<AllMovies></AllMovies>);
        await waitFor(() => {
            expect(screen.getAllByTestId("movie-card-test").length).toBe(2);
        });

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "https://www.omdbapi.com/?apikey=5d0be93f&s=Harry"
        );
    })

    test("Profile icon when there is no liked movies", async () => {
        require("react-redux").useSelector.mockReturnValueOnce({
            likes: { likedMovies: [] }
        });

        render(<AllMovies />);

        await waitFor(() => {

            const profileIcon = screen.getByTestId("Favourites");
            expect(profileIcon).toBeInTheDocument();
        })
    })

    test("Heart icon when there is any liked movies..", async () => {
        require("react-redux").useSelector.mockReturnValue({
            likes: {
                likedMovies: [{
                    Title: "Harry Potter",
                    Year: "2001",
                    Poster: "poster.jpg",
                    imdbID: "tt1111",
                }]
            }
        });



        render(<AllMovies></AllMovies>);

        await waitFor(() => {

            const heartIcon = screen.getByTestId("Liked-Movies");
            expect(heartIcon).toBeInTheDocument();
        })
    })
})