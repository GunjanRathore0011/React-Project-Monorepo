import { useEffect,useState } from "react";

export const useDebounce=(value,delay)=>{

    const [val, setVal]=useState(value);

    useEffect(()=>{
        const handler=setTimeout(()=>{
            setVal(value)
        },delay);

        return ()=>{
            clearTimeout(handler);
        }
    },[value,delay]);

    return val;
}   