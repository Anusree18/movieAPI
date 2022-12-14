import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieListHeader from "./Components/MovieListHeader";
import SearchBox from "./Components/SearchBox";
import axios from "axios";

// //Axios Default Settings
// axios.defaults.baseURL="https://fake-movie-database-api.herokuapp.com";
// axios.defaults.params["api"]=process.env.REACT_APP_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
 
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://fake-movie-database-api.herokuapp.com/api?s=batman',
      headers: {}
    };

    axios(config)
      .then(function (response) {
      setMovies(response.data);
      //  
      
      })
      
    // if (response.data.Poster) {
    //   setUpdatedMovies(response.data.Poster);
    // }
  },[]);


 
    // axios.get(`${url}`.then((response)=>{
    //   setUpdatedMovies(response);
    //   console.log(response);
    // }))


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="d-flex gap-4  ">
      {console.log({"input":movies})}
      { movies.map((movie) => {
        return((movie.Title)) })};
       
      </div>
      {/* <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeader heading="Search Results" />
      </div>
      <div className=" d-flex ">
        <MovieList movies={updatedMovies} />
      </div> */}
    </div>
  );
}


export default App;