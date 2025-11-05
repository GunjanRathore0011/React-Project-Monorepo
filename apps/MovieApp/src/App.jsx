import axios from 'axios';
import React, { lazy, Suspense, useEffect } from 'react'
// import AllMovies from './pages/AllMovies';
// import MovieDetails from './pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';

const AllMovies = lazy(() => import('./pages/AllMovies'))
const MovieDetails = lazy(() => import('./pages/MovieDetails'))

import { ToastContainer } from 'react-toastify';
const App = () => {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}>

          <AllMovies />

        </Suspense>} />
        <Route path="/movie/:id" element={<Suspense fallback={<div>Loading..</div>}> 
          <MovieDetails />
        </Suspense>} />
      </Routes>

    </>
  )
}

export default App