import React from "react";

//display

const MovieList = (props) => {
  // console.log(props.movies);
  // console.log(props.movies.Search);
  const { movies } = props;
  return (
    <>
      {movies.Search?.map((movie) => {
        return (
          <div class="card w-full h-20 p-2">
            <img
              className="w-full h-full rounded-xl"
              src={movie.Poster}
              alt="Poster"
            />

            <h6 class="card-title">{movie.Title}</h6>
            <p class="card-text">({movie.Year})</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
