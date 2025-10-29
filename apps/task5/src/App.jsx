import React, { useState } from 'react'

const App = () => {
      // const [userName, setUserName]=useState("");
    // const [fullName, setFullName]=useState("");
    // const [age, setAge]=useState("");

    const [formData, setFormData]=useState({
        userName:"",
        fullName: "",
        age: ""
    })
    const [display, setDisplay]= useState(false)

    function changeHandler(e){
        setFormData({
            ...formData,
            [e.target.name]:[e.target.value]
        })
    }
    function submitHandler(e){
        e.preventDefault();
        setDisplay(true)
        console.log(formData);
    }

  return (
    <div className='w-[500px] m-auto text-lg text-center mt-14'>
        <h1>Details</h1>
        <form className='w-[400px] m-auto'>
            <div className='mt-3'>
                <label htmlFor='userName' className='p-5 '>UserName:</label>
                <input id='userName' name='userName' placeholder='Enter name' onChange={changeHandler}></input>
            </div>
            <div className='mt-3'> 
                <label htmlFor='fullName' className='p-5'>FullName:</label>
                <input id='fullName' name='fullName' placeholder='Enter full name' onChange={changeHandler}></input>
            </div>

            <div className='mt-3 mb-5'>
                <label htmlFor='age' className='p-5'>Age:</label>
                <input id='age' name='age' placeholder='Enter age' onChange={changeHandler}></input>
            </div>
            <button onClick={(e)=>submitHandler(e)}> Submit</button>
        </form>

 
        {
            display && <div className='w-[400px] m-auto mt-6'>
                <ul>
                    <li>User Name: {formData.userName} </li>
                    <li>Full Name: {formData.fullName} </li>
                    <li>Age: {formData.age} </li>
                </ul>
            </div>
        }
    </div>
  )
}

export default App