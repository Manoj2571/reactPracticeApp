

const MovieList = ({ movies }) => {

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} - {movie.genre} - {movie.director} -{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList
