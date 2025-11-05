import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';

const MovieCard = ({ movie ,like=false ,onUnlike}) => {
  // console.log(movie)
  // console.log(movie.Title, movie.Year, movie.Poster)
  const naviagate = useNavigate();
  const [liked, setLiked] = useState(like);

  const movieDetailHandler = () => {
    naviagate(`/movie/${movie.imdbID}`)
  }
  
const likeHandler = () => {
  let likedMovies = JSON.parse(localStorage.getItem('liked'));

  if (!Array.isArray(likedMovies)) {
    likedMovies = [];
  }

  if (liked) {
    const updatedMovies = likedMovies.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    localStorage.setItem('liked', JSON.stringify(updatedMovies));
    if(onUnlike) onUnlike(movie.imdbID);
    setLiked(false);
    toast("Unliked");
  } else {
    
      likedMovies.push(movie);
      localStorage.setItem('liked', JSON.stringify(likedMovies));
    
    setLiked(true);
    toast("Liked");
  }
};





  return (
    <div className=" cursor-pointer flex flex-col text-white justify-between items-center bg-gray-700 h-[620px] w-[350px] p-5">
      <div onClick={movieDetailHandler} className='flex flex-col gap-3 '>
        <img className='h-[450px] w-auto' src={movie.Poster}></img>
        <h1>{movie.Title}</h1>
        <h1>{movie.Year}</h1>
      </div>
      <div className='w-full px-4 flex justify-between'>
        <h1>movie</h1>
        <FaHeart onClick={likeHandler} className={`${liked ? "text-red-400" : "text-white"} text-2xl`} />
      </div>
    </div>
  )
}

export default MovieCard