"use client"

import React, { useContext, createContext, useState } from "react";

const CountriesContext = createContext();

export const CountriesProvider = ({ children, countriesData }) => {
  const countries = countriesData || [];
  const [filteredData, setFilteredData] = useState(countries);

  return (
    <CountriesContext.Provider
      value={{ countries, filteredData, setFilteredData }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
