// import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react"

// export function Temp() {

//     const [text, setText] = useState("Loadingg...")
//     const boxRef= useRef("..");
//     // useEffect(()=>{
//     //     console.log("Insie useEffect..")
//     //     setText("useEffect");
//     // },[])

//     // useLayoutEffect(()=>{
//     //     console.log("Insie useLayoutEffect..")
//     //     setText("useLayoutEffect");
//     // },[])

//     useLayoutEffect(() => {
//         const box = boxRef.current;
//         const { height } = box.getBoundingClientRect();
//         console.log("Height before paint:", height);
//     }, []);

//     return (
//         <>
//             {text}
//             <h1>Donne...</h1>
//             <input ref={boxRef} placeholder="Enter">

//             </input>
//         </>
//     )
// }

// import { useId } from 'react';

// export default function Temp() {
//   const id = useId();
//   console.log(id)
//   return (
//     <form>
//       <label htmlFor={id + '-firstName'}>First Name:</label>
//       <input id={id + '-firstName'} type="text" />
//       <hr />
//       <label htmlFor={id + '-lastName'}>Last Name:</label>
//       <input id={id + '-lastName'} type="text" />
//     </form>
//   );
// }
