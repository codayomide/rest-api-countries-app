"use client"

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  // const setDarkModeToLocalStorage = (mode) => {
  //   localStorage.setItem('isDarkMode', JSON.stringify(mode));
  // };

  // useEffect(() => {
  //   const storedMode = JSON.parse(localStorage.getItem('isDarkMode'));
  //   if (storedMode !== null) {
  //     setIsDarkMode(storedMode);
  //   }
  // }, []);

  // useEffect(() => {
  //   setDarkModeToLocalStorage(isDarkMode);
  // }, [isDarkMode]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
 
export default Providers;