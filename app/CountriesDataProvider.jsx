"use client";

import React, { useState } from "react";
import { createContext } from "react";

export const CountriesContext = createContext();

export async function getServerSideProps() { 
  let countries = null;
  let isLoading = true;

  try {
    const res = await fetch('https://restcountries.com/v2/all');
    countries = await res.json;
    isLoading = false;
  } catch (err) {
    console.log(err);
    isLoading = false;
  }

  return {
    props: {
      countries,
      isLoading
    },
  };
}

const CountriesDataProvider = ({ countries, isLoading, children }) => {
  const [filteredData, setFilteredData] = useState(countries);

  return <CountriesContext.Provider value={{ countries, isLoading, filteredData, setFilteredData }}>{children}</CountriesContext.Provider>
}
 
export default CountriesDataProvider;