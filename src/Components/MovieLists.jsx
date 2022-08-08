import React from "react";
//For Search

const MovieLists = (props) => {
//   console.log(props.movies);
//   const { movies } = props;
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div className="image-container d-flex justify-content-start  m-3">
            <img src={movie.Poster}></img>
          </div>
        );
      })}
    </>
  );
};

export default MovieLists;
