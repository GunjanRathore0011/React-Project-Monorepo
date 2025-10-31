import React, { useReducer, useState } from 'react'
import { authReducer } from '../../../task9/src/reducer/auth';

const Login = () => {

    const [state, dispatch] = useReducer(authReducer, {});
    // console.log(state)

    const [formData, setFormData]=useState({})
    const [display , setDisplay]= useState(false);

    function changeHandler(e){
        setFormData({
            ...formData,
            [e.target.name]:[e.target.value]
        })
    }
    function submitHandler(e){
        e.preventDefault();
        dispatch({type: 'login-start'})
        dispatch({type: 'login-success', payload : {...formData}});
        setDisplay(true);
        // console.log(formData);
    }

  return (
    <div className='w-[500px] m-auto text-lg text-center mt-24'>
        <h1>Login Form</h1>
        <form className='w-[500px] m-auto my-12 flex flex-col justify-center items-center bg-gray-100 p-10'>
            <div className='mt-3'>
                <label htmlFor='userName' className='p-5 '>UserName:</label>
                <input id='userName'className='border-2 border-gray-200 mr-5' name='userName' placeholder='Enter name' onChange={changeHandler}></input>
            </div>
            <div className='mt-3'> 
                <label htmlFor='fullName' className='p-5'>FullName:</label>
                <input id='fullName' className='border-2 border-gray-200 mr-5' name='fullName' placeholder='Enter full name' onChange={changeHandler}></input>
            </div>

            <div className='mt-3 mb-5'>
                <label htmlFor='age' className='p-5'>Age:</label>
                <input id='age' name='age' className='border-2 border-gray-200 mr-5' placeholder='Enter age' onChange={changeHandler}></input>
            </div>
            <button className='bg-gray-300 rounded cursor-pointer p-1 mt-3 px-2'  onClick={(e)=>submitHandler(e)}>Login</button>
        </form>

        {
            display && <div className='w-[400px] m-auto mt-6'>
                <ul>
                    <li>User Name: {state.user.userName} </li>
                    <li>Full Name: {state.user.fullName} </li>
                    <li>Age: {state.user.age} </li>
                </ul>
            </div>
        }
    </div>
  )
}

export default Login