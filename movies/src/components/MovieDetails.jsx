import { Link, useParams } from "react-router-dom";
import { FetchFilm } from "./util/FetchFilm";
import "./details.css";

export const MovieDetails = () => {
  let imdbID = useParams();
  console.log(imdbID);
  const movies = FetchFilm(imdbID);
  return (
    <div className="container-details">
      <Link to="/movies">
        <button className="btn">Home</button>
      </Link>
      {movies.map((movie) => (
        <div className="details">
          <div>
            <img src={movie.Images[0]} alt="movie" />
          </div>
          <div className='infos'>
            <h3>Title</h3><span>{movie.Title}</span>
            <h3>Plot</h3><span>{movie.Plot}</span>
            <h3>Released</h3><span>{movie.Released}</span>
            <h3>Genre</h3>{movie.Genre}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
