import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="bg-lmBgLightGray dark:bg-dmBlue text-lmVeryDarkBlue dark:text-neutralWhite drop-shadow w-full flex justify-between items-center px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6 ss:py-7">
      <h2 className="font-extrabold text-sm ss:text-lg md:text-2xl">
        Where in the world?
      </h2>
      
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
