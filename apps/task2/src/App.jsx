import React, { useState } from 'react'

const App = () => {
   const [sec, setSec] = useState(0);
    const [intervalId,setIntervalId]= useState(null);

    const startTimer = () => {
        // Complete this function
        let timerId = setInterval(function () {
            setSec((prev)=>prev+1)
        }, 1000);
        setIntervalId(timerId);
    };
    const stopTimer = () => {
        // Complete this function
        clearInterval(intervalId);
    };
    const resetTimer = () => {
        // Complete this function
        clearInterval(intervalId);
        // console.log(intervalId)
        setSec(0);
    };
    return (
        <div  className=' w-[500px] m-auto text-lg text-center mt-14 flex flex-col gap-4 justify-center'>
            <h1>Timer</h1>
            <span> {Math.floor(sec/60)} mins </span>
            <span> {Math.floor(sec%60)} secs</span>
            <div className='w-xl justify-center  flex gap-3'>
                <button className='bg-purple-300 p-2 rounded-full cursor-pointer'  onClick={startTimer}>Start</button>
                <button className='bg-purple-300 p-2 rounded-full cursor-pointer' onClick={stopTimer}>Stop</button>
                <button className='bg-purple-300 p-2 rounded-full cursor-pointer' onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default App