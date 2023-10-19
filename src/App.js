import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=7836a51b'

const App = () => {

  const [movies, setMovies] = useState([])
  const [text, setText] = useState('')

  const searchMovies = async (title) => {
    const url = API_URL + "&s=" + title
    const response = await fetch(url)
    const data = await response.json()
    setMovies(data.Search)
  }

  // useEffect(() => {
  //   searchMovies('batman')
  // })


  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(text)} />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }


    </div>
  )
}

export default App