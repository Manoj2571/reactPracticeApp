import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("/movies/fetchMovies", async () => {
  const response = await axios.get(
    "https://redux-practiceset-2.vercel.app/movies"
  );


  return response.data;
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "success"
      state.movies = action.payload;
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.status = "error"
      state.error = action.payload
    });
  },
  reducers: {
    addMovie: (state, action) => {
      state.movies = [...state.movies, action.payload.movie];
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie._id != action.payload
      );
    },
    updateMovie: (state, action) => {
      const movieIndex = state.movies.findIndex(
        (movie) => movie._id == action.payload._id
      );

      state.movies[movieIndex] = action.payload;
    },
  },
});

export const { addMovie, deleteMovie, updateMovie } = movieSlice.actions;


