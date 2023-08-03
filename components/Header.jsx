'use client'

import { useState } from 'react';
import { FaSun } from 'react-icons/fa';
import { BiSolidMoon } from 'react-icons/bi'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="bg-lmBgLightGray text-lmVeryDarkBlue drop-shadow w-full flex justify-between items-center px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6 ss:py-7">
      <h2 className="font-extrabold text-sm ss:text-lg">Where in the world?</h2>
      <button className="text-xs ss:text-sm flex items-center">
        {darkMode ? <>
            <FaSun className="header_icons" /> <span>Light Mode</span>
          </> : 
          <>
            <BiSolidMoon className="header_icons" /> <span>Dark Mode</span>
          </>
        }
      </button>
    </header>
  );
}
 
export default Header;