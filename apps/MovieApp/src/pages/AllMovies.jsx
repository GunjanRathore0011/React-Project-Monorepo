import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FaRegHeart, FaRegUserCircle, FaSearch } from 'react-icons/fa';
import MovieCard from '../components/MovieCard';
import { useDebounce } from '../hook/useDebounce';
import { useNavigate } from 'react-router-dom';


const AllMovies = () => {

    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [showDropdown,setShowDropdown] = useState(false);

    const [likeM, setLikeM]= useState(false);


    const navigate= useNavigate();

    const debouncedVal = useDebounce(term, 500);

    const apiCall = async (debouncedVal) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://www.omdbapi.com/?apikey=5d0be93f&s=${debouncedVal}`);
            // console.log(response)
            // console.log(response.data.Search);
            if (response.data.Response === "True") setMovies(response.data.Search)
            else setMovies([]);
            setLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (debouncedVal) apiCall(debouncedVal);
    }, [debouncedVal])


    useEffect(()=>{
    let likedMovies = JSON.parse(localStorage.getItem('liked'));
        if(Array.isArray(likedMovies) && likedMovies.length>0) setLikeM(true);
    },[])
    return (
        <>
            <div>

                <div className='flex flex-wrap justify-between items-center text-lg py-5 px-7 bg-gray-700 text-white'>
                    <h1 className='text-2xl'>Movie App</h1>
                    <div className='flex gap-4 items-center  py-2 px-3'>
                        <input placeholder='Search Movies or Shows' className='px-2 py-1 ' value={term} onChange={(e) => { setTerm(e.target.value) }}></input>
                        <FaSearch className=' text-3xl cursor-pointer' onClick={() => { apiCall() }} />
                    </div>
                    <div className="relative">

                        {
                            likeM ? <FaRegHeart /> : <FaRegUserCircle
                            className="text-5xl cursor-pointer"
                            
                            onClick={() => navigate('/favourite')}
                        />
                        }
                        

                        {/* {showDropdown && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10">
                                <button
                                    onClick={() => {
                                        navigate('/favourite');
                                        setShowDropdown(false);
                                    }}
                                    className=" w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-200"
                                >
                                    Liked
                                </button>
                            </div>
                        )} */}
                    </div>

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
                                    movies.length !== 0 ? <>

                                        {
                                            movies.map((movie, idx) => {
                                                return <MovieCard key={idx} movie={movie} ></MovieCard>
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

export default AllMovies