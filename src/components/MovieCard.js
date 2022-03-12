import React from "react";
import { Link } from "react-router-dom";
import "./Css/MovieCard.css";

const MovieCard = ({ movie, id }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movie/${movie.id}`;

  return (
    <div class="card col-lg-3 col-md-4 col-sm-6 shadow">
      <img src={posterUrl} class="card-img-top" alt="Nothing to show" />
      <div class="card-body">
        <h5 class="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} class="btn btn-primary" id="button">
          Show details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
