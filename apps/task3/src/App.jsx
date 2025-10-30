import React, { useState } from 'react'

const App = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");

  const addCities = () => {
    //Complete functiondafg
    // console.log(cities);
    if(city.length==0) return;  
    setCities([...cities, city]);
  };

  const removeCities = (idx) => {
    // console.log(idx)

    setCities(cities.filter((city,i)=>idx!=i));
  };

  return (
    <div className='w-[500px] m-auto text-lg flex flex-col justify-center text-center mt-14'>
<br></br>

      <h1>Hello CodeSandbox</h1>
      {/* <h2>Start editing to see some magic happen!</h2> */}
<br></br>
      <div className='my-6' >
        <input
        placeholder="Add city"
        onChange={(e) => setCity(e.target.value)}
        className='focus border-2 border-gray-300 p-1'
      ></input>
      <button className="p-1 px-2 ml-4 bg-purple-300 rounded cursor-pointer" onClick={addCities}>
        Add
      </button>
      </div>

      <div className="cities">
        <ul >

          {cities.map(( city,idx) => {
            return (
              <div key={idx} className='flex gap-7 justify-center mb-3'>
                <li  className="">
                  {city}
                </li>
                <span className="bg-red-200 px-3 cursor-pointer" onClick={()=>removeCities(idx)} >X</span>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App