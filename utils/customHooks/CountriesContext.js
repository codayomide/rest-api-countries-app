import React, { useContext, createContext } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children, countriesData }) => {
  const countries = countriesData || [];

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
