import axios from 'axios';
import React, { useEffect } from 'react'
import AllMovies from './pages/AllMovies';
import MovieDetails from './pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<AllMovies/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    
    </>
  )
}

export default App