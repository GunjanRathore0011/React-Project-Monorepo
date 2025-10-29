import React, { useState } from 'react'

const App = () => {
    const [show, setShow] = useState(true);
    function handleClick(){
        setShow((prev)=>!prev)
    }
    return (
        <div className='w-[500px] m-auto text-lg text-center mt-14'>

            <button className='bg-purple-300 p-2 rounded-full' onClick={handleClick}> Show / Hide </button>
            {

                show &&
                <h1> Welcome to the react challenge</h1>

            }
        </div>
    )
}

export default App