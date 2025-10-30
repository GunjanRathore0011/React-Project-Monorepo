import React, { useContext } from 'react'
import { ThemeContext } from '../App';

const Temp = () => {

    const [theme, setTheme] = useContext(ThemeContext);

    console.log(ThemeContext);

    return (
        <div className='text-center p-7 text-lg'>
            <h1 className='my-10'>Theme: {theme}</h1>
            <button className= ' rounded cursor-pointer bg-slate-300 p-1.5' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}>Change theme</button>
        </div>
    )
}

export default Temp