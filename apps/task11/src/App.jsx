
import React from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import Dashboard from './routing-components/Dashboard'
import Profile from './routing-components/Profile'
import Setting from './routing-components/Setting'
import Report from './routing-components/Report'
import NotFound from './routing-components/NotFound'

const App = () => {

  const { id } = useParams();
  // console.log(id);

  return (
    <>
      <BrowserRouter>
        <div>

          <Link to={`/dashboard/${5}`}>Dashboard</Link>
        </div>
        <Routes>
          <Route path="/dashboard/:id" element={<Dashboard></Dashboard>}>
            <Route path="profile" element={<Profile></Profile>}></Route>
            <Route path="reports" element={<Report></Report>}></Route>
            <Route path='settings' element={<Setting></Setting>}></Route>
            <Route path='products' element={<Report></Report>}></Route>


          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App









// import Login from "./components/Login";
// import ProtectedRoute from "./components/ProtectedRoute";

// export default function App(){


//   return (
//     <div>
//       App

//       <ProtectedRoute isAuthenticated={false}>
//         <Login></Login>
//       </ProtectedRoute>
//     </div>
//   )
// }






// import axios from "axios";
// import { Suspense, use } from "react";



// export default function App(){
// const fetchData=()=>{
//   return axios.get("https://jsonplaceholder.typicode.com/todos/1");
// }
// const Data=fetchData();
//     return(
//       <div>

//         {/* <Suspense fallback={<div>Loading....</div>}> */}

//           <Child userData={Data}></Child>

//         {/* </Suspense> */}

//       </div>
//     )
// }


// const Child=({userData})=>{
//   console.log(use(userData));
//   return(
//     <div>
//       Child Component....
//     </div>
//   )
// }







// import React, { lazy, Profiler, Suspense, useEffect, useTransition } from 'react'
// import Login from './components/Login'
// import { CounterForm } from './components/CouterForm'
// import { Dashboard } from './components/Dashboard'
// import axios from 'axios';

// const Temp = lazy(() => import("./components/Temp"));

// const App = () => {
//   return (
//     <div className='text-center'>

//       {/* <Suspense fallback={<div>Loading profile...</div>}>
//         <Child></Child>
//       </Suspense> */}


// <Temp></Temp>
//     </div>
//   )
// }

// export default App


// const Child = () => {

//   const [pending, startTransition] = useTransition();

//   const clickHandler = () => {
//     console.log("Clicked..");
//     startTransition(() => {
//       // const resposnse = axios.get("https://jsonplaceholder.typicode.com/todos/1");
//     const response = new Promise( res=>setTimeout(()=>{console.log("jdsljfl")},2000));
//     console.log(response)
//     })
//   }

//   return (
//     <>
//       <h1>Call the Api..</h1>
//       <button disabled={pending} onClick={clickHandler} className='bg-amber-50 p-2'>Call</button>
//     </>
//   )
// }