import React, { useState } from 'react'

const App = () => {

  const [children, setChildren] = useState([1, 2, 3]);

  const clickHandler = (idx) => {
    // console.log(children);

    setChildren(children.filter((child, i) => i != idx));
  }

  return (
    <div className='flex justify-center  pt-28'>
      <div className='bg-slate-300 w-[50%] p-6 flex flex-col items-center gap-5'>
        <h1>Hi there....</h1>

        <div className='flex flex-col gap-5'>
          {/* <h2 className='bg-pink-200 p-2 cursor-pointer'>I'm child 1. Click to remove me!</h2>
        <h2 className='bg-pink-200 p-2 cursor-pointer'>I'm child 2. Click to remove me!</h2>
        <h2 className='bg-pink-200 p-2 cursor-pointer'>I'm child 3. Click to remove me!</h2> */}

          {
            children.map((child, idx) => (
              <h2 key={idx} onClick={() => { clickHandler(idx) }} className='bg-pink-200 p-2 cursor-pointer'>I'm child {child}. Click to remove me!</h2>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App