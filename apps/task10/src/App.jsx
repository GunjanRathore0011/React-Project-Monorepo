import React, { useMemo, useState } from 'react'

const App = () => {
  const [val,setVal]=useState(0);
  const [count, setCount] = useState(0);
  console.log("App rendered");

  // function calculation(){
  //   let fact=1;
  //   let arr= new Array(10000000)
  //   for(let i=1; i<=10000;i++){
  //     fact*=i;
  //     arr[i]=fact;
  //   }
  //   return fact;
  // }
  const calculation=useMemo(()=>{
    let fact=1;
    let arr= new Array(10000000)
    for(let i=1; i<=10000;i++){
      fact*=i;
      arr[i]=fact;
    }
    console.log("Calculation is done...")
    return fact;
  },[val])

  // console.log(calculation);
  return (
    <div className='flex flex-col justify-center items-center mt-24 text-lg'>

      <div className='my-4'>
        <h1>Count: {count}</h1>

        <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3 mr-5' onClick={() => { setCount((prev) => prev + 1) }}>Increase</button>

        <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3' onClick={() => { setVal((prev) => prev + 1) }}>Change Value</button>

      </div>
    </div>
  )
}

export default App
