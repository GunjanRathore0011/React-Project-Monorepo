import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const Child = () => {

    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <div className='text-center mt-12'>

            <div className='my-14'>Theme : {theme}</div>
            <button className=' rounded cursor-pointer bg-slate-300 p-1.5' onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}>Change theme</button>

        </div>
    )
}

export default Child