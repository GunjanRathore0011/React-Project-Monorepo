import React, { useState } from 'react'

const App = () => {
    const [val , setVal]=useState(0);
    const valHandler=(e)=>{
        let value=e.target.value;
        if(value>100 || value<0) {
            // setVal(100)
            return ;
            // alert("Enter less than 100");
        }
        else setVal(value);
    }
  return (
    <>
      <div className='w-[500px] m-auto text-lg text-center mt-14'>
        <h1>Progress bar</h1>
        <div
          className="bg-blue-500 h-6 "
          data-testid="progress-bar"
          style={{ width: `${val}%` }}
        ></div>
        <form>
          <label htmlFor="progress-bar">Input Percentage:</label>
          <input type="number" data-testid='progress-input' onChange={(e)=>{valHandler(e)}} min={0} max={100}/>
        </form>
      </div>
    </>
  );
}


export default App