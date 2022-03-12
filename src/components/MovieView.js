import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hero from "./Hero";
import './Css/MovieView.css'

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=68617f966c44c918ae65de4a398dd766&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovie() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backDrop = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <div>
          <Hero text={movieDetails.original_title} backDrop={backDrop} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  className="detail-img img-fluid rounded"
                  src={posterPath}
                  alt="Nothing to Show"
                ></img>
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p>
                  <strong>OverView : </strong>
                  {movieDetails.overview}
                </p>
                <p>
                  <strong>Status : </strong>
                  {movieDetails.status}
                </p>
                <p>
                  <strong>Release Date : </strong>
                  {movieDetails.release_date}
                </p>
                <p>
                  <strong>Time : </strong>
                  {movieDetails.runtime}m
                </p>
              </div>
            </div>
            <div className="text-right my-2">
              <p>
                {" "}
                Search for more Movies <Link to="/">Click here</Link>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
  return renderMovie();
};

export default MovieView;
