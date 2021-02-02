import React from 'react';
import './index.css';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex row justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>

          <div className="overlay d-flex align-items-center justify-content-center">
            <i class="fa fa-heart"></i>&nbsp; Add to favorites
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
