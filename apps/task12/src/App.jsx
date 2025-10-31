import React from 'react'
import { useToogle } from './hooks/useToggle'
import { getCounter} from './hooks/getCounter';

const App = () => {

  const [visble , toggle]= useToogle(true);
  const {count , increment , decrement , reset}=getCounter();

  return (
    <>
    <div className=' w-[500px] mx-auto text-xl mt-24 '>

    {
      visble && <h1>Welcome to the App....!!</h1>
    }
    <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3' onClick={toggle}>Toggle</button>
    </div>

    <div  className=' w-[500px] mx-auto text-xl mt-24 '>

      <h1>Count: {count}</h1>
      <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3 mr-2' onClick={increment}>increment</button>
      <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3 mr-2' onClick={decrement}>decrement</button>
      <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3' onClick={reset}>reset</button>
    </div>

    <div className=' w-[500px] mx-auto text-xl mt-24 '>

    </div>
    </>
  )
}

export default App