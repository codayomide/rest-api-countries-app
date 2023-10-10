"use client";

import React from "react";
import { FaSun } from "react-icons/fa";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="text-xs font-semibold ss:text-sm md:text-lg flex items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <div>
          <FaSun className="header_icons" /> <span>Light Mode</span>
        </div>
      ) : (
        <div>
          <BiSolidMoon className="header_icons" /> <span>Dark Mode</span>
        </div>
      )}
    </button>
  );
};

export default ThemeSwitcher;
