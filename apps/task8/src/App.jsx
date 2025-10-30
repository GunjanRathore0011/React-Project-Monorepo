import React, { useState } from 'react'

import { createContext } from 'react';
import Temp from './components/Temp';
import Child from './components/Child';

export const ThemeContext = createContext('light');
const App = () => {
  const [theme, setTheme] = useState('light')
  console.log(ThemeContext);

  return (
    <>
      <ThemeContext value={[theme, setTheme]}>
        <Temp>

        </Temp>

      </ThemeContext>


      <Child></Child>
      {theme}
    </>

  )
}

export default App