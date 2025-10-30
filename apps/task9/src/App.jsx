// import React, { useState, useCallback, memo } from "react";
// import ChildComponent from "./components/ChildComponent";


// const App = () => {
//   console.log("Parent rendered");

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const handleIncrement = useCallback(() => {
//     setCount((prev) => prev + 1);
//   }, [text]); 

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Count: {count}</h2>
//       <ChildComponent onClick={handleIncrement} />

//       <input
//         placeholder="Type something..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ marginTop: "10px", padding: "5px" }}
//       />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import ComponentChanges from './components/ComponentChanges'

const App = () => {
  return (
    <div>

      <ComponentChanges></ComponentChanges>
    </div>
  )
}

export default App