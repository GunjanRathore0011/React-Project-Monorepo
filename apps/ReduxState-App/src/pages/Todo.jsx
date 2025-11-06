import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/slice/todoSlice';
import { fetchDataByThunk } from '../redux/slice/thunkSlice';
import TodoCard from '../components/TodoCard';

const Todo = () => {

    const dispatch = useDispatch();
    const { loading, isError, data } = useSelector((state) => state.thunk);
    console.log(loading, isError, data);

    const fetchHandler = () => {
        dispatch(fetchDataByThunk());
    }

    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center gap-10'>
            <button disabled={loading} onClick={fetchHandler} className='bg-slate-400 px-3 py-2 rounded-full  text-xl'>Fetch Todo</button>
            {
                data ? <>
                    <div className='flex flex-col gap-3  '>
                        {
                            data.map((todo, idx) => {
                                return <TodoCard key={idx} todo={todo}></TodoCard>
                            })
                        }
                    </div>

                </> : <>
                    <div>No Data Found...</div>
                </>
            }
        </div>
    )
}

export default Todo