import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 75a7f92e

const API_URL = "http://www.omdbapi.com?apikey=75a7f92e";
// const movie = {
//   Title: "Girl Undefined",
//   Year: "2019",
//   imdbID: "tt11758836",
//   Type: "movie",
//   Poster: "N/A",
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [item, setItem] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            type="text"
            placeholder="Search for movies"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => {
              searchMovies(item);
            }}
          />
        </div>

        <div className="container">
          {/* {movies.map((movie) => {
            if (movies.length > 0) {
              return <MovieCard movie={movie} />;
            } else {
              return "No movies found";
            }
          })} */}
          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
