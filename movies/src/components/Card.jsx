import React from "react";
import "./card.css";

export const Card = ({ films }) => {
  return films.map((film) => (
      <div className="movie">
        <img src={film.Images[1]} alt="movie" />
        <h3>{film.Title}</h3>
        <div className="info">
          {film.Runtime}|{film.Year}|{film.Rated}
        </div>
      </div>
  ));
};

export default Card;
