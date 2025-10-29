import React, { useEffect, useRef, useState } from 'react'

const App = () => {
   const [sec, setSec] = useState(10);
    const [count, setCount] = useState(0);
    const timerID = useRef(null);

    useEffect(() => {

        timerID.current = setInterval(() => {
            setSec((prev) => prev - 1)
        }, 1000)

        let timeOutID = setTimeout(() => {
            clearInterval(timerID.current);
        }, 11000);

        return () => {
            clearTimeout(timeOutID);
            clearTimeout(timerID.current)
        }
    }, [])

    return (
        <div className='w-[500px] m-auto text-lg text-center'>

            <h1 className='my-5'>No. of Clicks until timer expires</h1>

            <div>
                <div>{count}</div>

                <div className='my-4'> 
                    Time Left: {sec} seconds
                </div>
            </div>

            {(sec > 1) &&

                <button className='bg-red-200 rounded px-4 cursor-pointer' onClick={() => {
                    setCount((count) => count + 1)
                }}>+</button>
            }
        </div>
    )
}

export default App