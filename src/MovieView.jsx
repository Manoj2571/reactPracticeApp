import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./movieSlice";
import { Link } from "react-router-dom";
import MovieList  from "./MovieList";

const MovieView = () => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Movie List</h2>
      {status == "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {status == "success" && <MovieList movies={movies} />}
      <button>
        <Link
          to="/movieForm"
          style={{ textDecoration: "none", color: "black" }}
        >
          Add Movie
        </Link>
      </button>
    </div>
  );
};

export default MovieView;
