import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/counterSlice';

const Counter = () => {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();

  return (
    <div className='min-h-screen flex justify-center items-center'>

      <div className='bg-slate-200 w-[500px] flex flex-col justify-center items-center gap-5 py-10'>
        <h1>Count: {count}</h1>

        <div className='flex gap-4'>
          <button className='bg-slate-400 rounded-full  px-3 py-2' onClick={()=>{dispatch(increment())}}>Increment</button>
          <button className='bg-slate-400 rounded-full  px-3 py-2' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
      </div>

    </div>
  )
}

export default Counter