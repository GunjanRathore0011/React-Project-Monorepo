import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import MovieCard from '../components/MovieCard';
import { useDebounce } from '../hook/useDebounce';
import { useNavigate } from 'react-router-dom';


const FavouriteMovies = () => {

    const [loading, setLoading] = useState(false);
   const [favouriteM, setFavouriteM]= useState([]);

    const navigate= useNavigate();

    useEffect(()=>{
        const fMovie= (localStorage.getItem('liked'));
        setFavouriteM(JSON.parse(fMovie))
    },[])


    const handleUnlike=(id)=>{
        const updated= favouriteM.filter((m)=>m.imdbID != id);
        setFavouriteM(updated);
        localStorage.setItem('liked', JSON.stringify(updated));
    }
    return (
        <>
            <div>

                <div className='flex flex-wrap justify-between items-center py-4 px-15 bg-[#1E2A38] text-white shadow-md sticky top-0 z-50'>
                    <h1 className='text-2xl'>Movie App</h1>
                    <div className='flex text-2xl gap-4 items-center  py-2 px-3'>
                        <p>Favourite Movies</p>
                    </div>
                    <button className='hover:underline cursor-pointer text-2xl underline mr-4' onClick={()=>{navigate("/")}}>Home</button>

                </div>

                <div className='min-h-screen bg-gray-800 p-7'>

                    {
                        loading ? <>
                            <div className="flex justify-center items-center min-h-screen">
                                <span className="loader text-white font-extrabold text-7xl"></span>
                            </div>
                        </> : <>
                            <div className='flex text-white justify-between py-7'>
                                <h1 className='text-3xl text-red-300 font-bold'>Movies:</h1>
                                <select className='w-[150px]' id="" name="">
                                    <option className=' bg-gray-100 text-black' value="option1"> All</option>
                                </select>
                            </div>
                            <div className=' flex flex-wrap justify-center items-center gap-16 my-13'>
                                {
                                    favouriteM.length !== 0 ? <>

                                        {
                                            favouriteM.map((movie, idx) => {
                                                return <MovieCard key={idx} movie={movie} like={true} onUnlike={handleUnlike}></MovieCard>
                                            })
                                        }

                                    </> :

                                        <div className='mt-64 text-xl text-center text-white'>No Movie Found...</div>

                                }
                            </div>
                        </>

                    }
                </div>
            </div>

        </>
    )
}

export default FavouriteMovies