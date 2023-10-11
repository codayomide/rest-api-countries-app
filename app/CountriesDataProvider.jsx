"use client";

import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const CountriesContext = createContext();

export async function getServerSideProps() {
  let countriesData = null;
  let isLoading = true;

  try {
    const res = await fetch("https://restcountries.com/v2/all");
    countriesData = await res.json();
    console.log(countriesData)
    isLoading = false;

  } catch (err) {
    console.log(err);
    isLoading = false;
  }

  return {
    props: {
      countriesData,
      isLoading,
    },
  };
}

const CountriesDataProvider = ({ countriesData, isLoading, children }) => {
  const [countries, setCountries] = useState(countriesData);
  const [filteredData, setFilteredData] = useState(countries);

  console.log(countriesData);

  useEffect(() => {
    setCountries(countriesData);
  }, [countriesData]);

  return (
    <CountriesContext.Provider
      value={{ countries, isLoading, filteredData, setFilteredData }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesDataProvider;
