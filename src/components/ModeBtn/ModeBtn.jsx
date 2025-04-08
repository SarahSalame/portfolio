import React, { useContext } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../Context/Context'
import { IoSunnyOutline } from 'react-icons/io5';


const ModeBtn = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
      <button onClick={toggleTheme} className='modeBtn'>
      {theme === "light" ? <FaMoon /> :<IoSunnyOutline className="Icon"/>}
    </button>

  )
}

export default ModeBtn