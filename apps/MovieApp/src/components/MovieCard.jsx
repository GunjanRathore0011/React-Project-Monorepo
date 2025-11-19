import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { toast } from 'react-toastify';
import { addLike, removeLike } from '../redux/likeSlice';

const MovieCard = ({ movie }) => {
  const favouriteM = useSelector((state) => state.likes.likedMovies || []);

  const isLiked =favouriteM.length>0 ?  favouriteM.some((m) => m.imdbID === movie.imdbID) : false;

  const naviagate = useNavigate();
  const dispatch = useDispatch();

  const movieDetailHandler = () => {
    naviagate(`/movie/${movie.imdbID}`)
  }

  const likeHandler = () => {

    if (isLiked) {
      dispatch(removeLike(movie));
      toast("Unliked");
    } else {
      dispatch(addLike(movie))

      toast("Liked");
    }
  };

  return (
    <div className=" cursor-pointer flex flex-col text-white justify-between items-center bg-gray-700 h-[620px] w-[350px] p-5" data-testid="movie-card-test">
      <div onClick={movieDetailHandler} data-testid="movie-card" className='flex flex-col gap-3 '>
        <img className='h-[450px] w-auto' src={movie.Poster}></img>
        <h1>{movie.Title}</h1>
        <h1>{movie.Year}</h1>
      </div>
      <div className='w-full px-4 flex justify-between'>
        <h1>movie</h1>
        <FaHeart onClick={likeHandler} data-testid="heart-icon" className={`${isLiked ? "text-red-400" : "text-white"} text-2xl`} />
      </div>
    </div>
  )
}

export default MovieCard