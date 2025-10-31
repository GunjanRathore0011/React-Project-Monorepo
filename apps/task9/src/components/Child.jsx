import React from 'react'
import { memo } from 'react';

const Child = ({message , greet}) => {

  console.log("Child Rendering...");

  return (
   <>
     <div>{message} 
    </div>
    <h1>{greet()}</h1>
   </>
  ) 

}

export default memo(Child);