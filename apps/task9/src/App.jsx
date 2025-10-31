import React, { useCallback, useState } from 'react'
import Child from './components/Child';

const App = () => {
  console.log("Parent Rendering...");

  const [message, setMessage] = useState("Good Morning!");
  const [val, setVal] = useState("");

  const greet = useCallback(() => {
    console.log("Hello");
    return "Hello!!"
  },[])
  // console.log(greet);

  function clickHandler() {
    setMessage(val);
  }

  return (
    <div className='mt-20 flex  text-lg flex-col justify-center items-center '>

      <div className='my-12'>

        <input placeholder='Enter the message' className='border-2 border-gray-400 mr-5' onChange={(e) => { setVal(e.target.value) }}></input>
        <button className='bg-gray-300 rounded cursor-pointer p-1.5' onClick={clickHandler}>Change Message</button>

      </div>

      <Child message={message} greet={greet}></Child>

    </div>
  )
}

export default App