import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedMovies: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const movie = action.payload;
      const exists = state.likedMovies.find((m) => m.imdbID === movie.imdbID);
      if (!exists) {
        state.likedMovies.push(movie);
      }
    },
    removeLike: (state, action) => {
      const movie = action.payload;
      state.likedMovies = state.likedMovies.filter((m) => m.imdbID !== movie.imdbID);
    },
    
  },
});

export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
