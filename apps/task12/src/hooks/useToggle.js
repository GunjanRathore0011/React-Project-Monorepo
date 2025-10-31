import React, { useState } from "react"

export const useToogle=(intialValue=false)=>{

    const [value, setValue]= useState(intialValue);
    const toggle=()=>{setValue((prev)=>!prev)};

    return [value, toggle];
}