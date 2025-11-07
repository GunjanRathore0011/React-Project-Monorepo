import { FaHeart, FaRegHeart, FaRegUserCircle, FaSearch } from 'react-icons/fa';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hook/useDebounce';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { useSelector } from 'react-redux'

const AllMovies = () => {

  const likeM= useSelector((state)=>state.likes.likedMovies);
  // console.log(likeM)

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('Harry');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const debouncedVal = useDebounce(term, 500);

  const apiCall = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.omdbapi.com/?apikey=5d0be93f&s=${query}`);
      if (response.data.Response === 'True') setMovies(response.data.Search);
      else setMovies([]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedVal) apiCall(debouncedVal);
  }, [debouncedVal]);

  return (
    <>
      <div className="flex flex-wrap justify-between items-center py-4 px-15 bg-[#1E2A38] text-white shadow-md sticky top-0 z-50">
        
        <h1 className="text-2xl font-semibold tracking-wide">
          MovieApp
        </h1>

        <div className="flex flex-wrap items-center justify-between bg-[#2C3E50] rounded-full px-4 py-2 w-[40%] max-w-md shadow-sm overflow-hidden">
          <input
            placeholder="Search Movies or Shows"
            className="bg-transparent  text-white placeholder-gray-400 outline-none"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <FaSearch
            className="text-gray-300 text-xl cursor-pointer hover:text-pink-400 transition-all"
            onClick={() => apiCall(term)}
          />
        </div>
        <div className="flex items-center gap-6 text-3xl">
          {likeM.length!==0 ? (
            <FaHeart
              className="text-pink-500 cursor-pointer hover:scale-110 transition-transform"
              title="Liked Movies"
              onClick={() => navigate('/favourite')}
            />
          ) : (
            <FaRegUserCircle
              className="cursor-pointer hover:text-pink-400 hover:scale-105 transition-transform"
              title="Profile / Favourites"
            />
          )}
        </div>
      </div>

      <div className="min-h-screen bg-gray-800 p-7">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loader text-white font-extrabold text-7xl"></span>
          </div>
        ) : (
          <>
            <div className="flex text-white justify-between py-7">
              <h1 className="text-3xl text-red-300 font-bold">Movies:</h1>
              <select className="w-[150px] bg-gray-700 text-white rounded-md px-2 py-1 outline-none">
                <option value="all">All</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-16 my-13">
              {movies.length ? (
                movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
              ) : (
                <div className="mt-64 text-xl text-center text-white">No Movie Found...</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllMovies;
