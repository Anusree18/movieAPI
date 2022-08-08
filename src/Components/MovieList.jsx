import React from "react";
import {BiChevronRight, BiSearchAlt2, BiMenu, BiChevronDown} from "react-icons/bi";


const MovieList = (props) => {
  console.log(props.movies.Search);
  const { movies } = props;
  return (
    <>
      {movies.Search?.map((movie) => {
        return (
         
          <div className="image-container d-flex justify-content-center w-100 h-100 m-3 ">
            <img src={movie.Poster}/><BiChevronRight/>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
