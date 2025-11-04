import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import image from '../assets/image2.jpg'

const MovieDetails = () => {
  const { id } = useParams();
  const [Details, setDetails] = useState({});
  const [liked , setLiked]= useState(true);
    // const arr= Details.Genre.split(",");
  // console.log(Details.Genre)

  console.log("imdbId", id)
  const apiCall = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=5d0be93f`);
      // console.log(response.data);
      setDetails(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    apiCall();
  }, [])

  return (
    <div className='relative bg-black opacity-100'>
      <img className='absolute  min-h-screen w-full' src={image}></img>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <div className='absolute z-10 inset-0 text-gray-200 text-lg  ml-32 mt-50 w-[600px]'>
        <h1 className='text-5xl text-red-300 font-extrabold'>{Details.Title}</h1>

        <div className=' my-13 flex gap-8 text-xl'>
          <span>{Details.Runtime} </span>
          <span>{Details.Year} </span>
          <span>{Details.imdbRating} </span>
        </div>

        <div className='my-5'>
          <h1 className='bg-gray-300 text-gray-700 flex justify-center rounded-full w-20 mb-1'>GENRES</h1>
          <span>
            {Details.Genre}
          </span>
        </div>

        <div className='my-5'>
          <h1 className='bg-gray-300 text-gray-700 flex justify-center rounded-full w-26 mb-1'>DIRECTORS</h1>
          <span>{Details.Director}</span>
        </div>

        <div className='my-5'>
          <h1 className='bg-gray-300 text-gray-700 flex justify-center rounded-full w-15 mb-1'>CAST</h1>
          <span>{Details.Actors}</span>
        </div>

        <div className='my-5'>
          <h1 className='bg-gray-300 text-gray-700 flex justify-center rounded-full w-25 mb-1'>SUMMARY</h1>
          <p>{Details.Plot}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails