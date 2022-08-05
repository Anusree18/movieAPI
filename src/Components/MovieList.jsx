import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-start m-3">
          <img src={movie.Poster} />
        </div>
      ))}
    </>
  );
};

export default MovieList;