import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({ films }) => {
  return films.map((film) => (
    <Link to={`/movies/${film.imdbID}`}  className="movie">
        <img src={film.Images[0]} alt="movie" />
        <h3>{film.Title}</h3>
        <div className="info">
          {film.Runtime}|{film.Year}|{film.Rated}
        </div>
    </Link>
  ));
};

export default Card;
