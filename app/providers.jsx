"use client"

import React from "react";
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

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
 
export default Providers;