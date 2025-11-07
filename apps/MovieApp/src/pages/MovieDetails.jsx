import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import image from '../assets/image2.jpg'
import { IoStarSharp } from "react-icons/io5";

const MovieDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState({});
  const naviagate = useNavigate(Details);
  // const arr= Details.Genre.split(",");
  // console.log(Details.Genre)

  // console.log("imdbId", id)
  const apiCall = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=5d0be93f`);
      console.log(response.data);
      // setDetails(response.data);
      const genreArray = response.data.Genre ? response.data.Genre.split(", ").map(g => g.trim()) : [];
      const actorArray = response.data.Actors ? response.data.Actors.split(", ").map(a => a.trim()) : [];
      setDetails({ ...response.data, Genre: genreArray, Actors: actorArray });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    apiCall();
  }, [])
  // console.log(Details);

  return (
    <div className='relative flex flex-col md:flex-row flex-wrap bg-black opacity-100'>
      <img className='absolute  min-h-screen w-full ' src={image}></img>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className='absolute z-10 inset-0 text-gray-200 text-md md:text-lg  md:ml-32 xs:ml-10 ml-5 mt-50 w-[600px] xs:text-sm s:text-sm '>
        <h1 className='text-5xl text-red-300 font-extrabold'>{Details.Title}</h1>

        <div className=' my-13 flex  flex-wrap gap-8 text-xl '>
          <span>{Details.Runtime} </span>
          <span>{Details.Year} </span>
          <span className='flex flex-wrap'>{Details.imdbRating} <IoStarSharp className="text-amber-300 mt-1" /> </span>
        </div>

        <div className='my-5'>
          <h1 className=' text-gray-300 text-xs sm:text-base md:text-lg flex flex-wrap justify-center rounded-full w-20 mb-1'>GENRES</h1>
          <span>
            {/* {Details.Genre} */}
          </span>
          <div className='flex gap-2'>
            {Details.Genre?.map((g, i) => (
              <span key={i} className='text-xs sm:text-base md:text-lg bg-gray-400 rounded-full px-1 py-0.5 md:px-2 md:py-1 text-gray-800'>{g}</span>
            ))}
          </div>
        </div>

        <div className='my-5'>
          <h1 className=' text-xs sm:text-base md:text-lg text-gray-300 flex justify-center rounded-full w-26 mb-1'>DIRECTORS</h1>
          <span className='bg-gray-400 text-xs sm:text-base md:text-lg rounded-full px-1 py-0.5 md:px-2 md:py-1 text-gray-800'>{Details.Director}</span>
        </div>

        <div className='my-5'>
          <h1 className=' text-xs sm:text-base md:text-lg text-gray-300 flex justify-center rounded-full w-15 mb-1'>CAST</h1>
          {/* <span>{Details.Actors}</span> */}
          <div className='flex gap-2'>
            {Details.Actors?.map((a, i) => (
              <span key={i} className= 'text-xs sm:text-base md:text-lg bg-gray-400 rounded-full px-1 py-0.5 md:px-2 md:py-1 text-gray-800'>{a}</span>
            ))}
          </div>
        </div>

        <div className='my-5'>
          <h1 className='text-xs sm:text-base md:text-lg  text-gray-300 flex justify-center rounded-full w-25 mb-1'>SUMMARY</h1>
          <p className='text-xs sm:text-base w-[400px] md:text-lg sm:w-[400px] md:w-[600px]'> {Details.Plot}</p>
        </div>

        <div className='bg-red-300 text-xs sm:text-base md:text-lg  font-bold rounded-full px-1 py-0.5 md:px-3 md:py-2 text-gray-700 w-30 md:w-48 mt-10 cursor-pointer'
          onClick={() => { naviagate(-1) }}
        >
          Back to All Movies
        </div>
      </div>
    </div>
  )
}

export default MovieDetails