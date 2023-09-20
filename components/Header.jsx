"use client";
import React from "react";
import { FaSun } from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-lmBgLightGray text-lmVeryDarkBlue drop-shadow w-full flex justify-between items-center px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6 ss:py-7">
      <h2 className="font-extrabold text-sm ss:text-lg md:text-2xl">
        Where in the world?
      </h2>
      <button
        className="text-xs font-semibold ss:text-sm md:text-lg flex items-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <>
            <FaSun className="header_icons" /> <span>Light Mode</span>
          </>
        ) : (
          <>
            <BiSolidMoon className="header_icons" /> <span>Dark Mode</span>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
