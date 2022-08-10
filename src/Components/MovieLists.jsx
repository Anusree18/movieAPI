import React from "react";

//For Search

const MovieLists = (props) => {
  // console.log(props.movies);
  //   const { movies } = props;
  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div class="card w-full p-2 h-20 ">
            <img
              className="w-full h-full rounded-xl"
              src={movie.Poster}
              alt="Poster"
            ></img>
            <h6 class="card-title">{movie.Title}</h6>
            <p class="card-text">({movie.Year})</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieLists;
