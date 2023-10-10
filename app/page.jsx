"use client"

import React from "react";
import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import { useState, useEffect, createContext } from "react";
import CountriesDataProvider from "./CountriesDataProvider";

export const CountriesContext = createContext();

const Home = () => {
  // const [countries, setCountries] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [filteredData, setFilteredData] = useState(countries);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await fetch('https://restcountries.com/v2/all')

  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCountries(data);
  //         setIsPending(false);
  //       })
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return ( 
    <CountriesDataProvider>
      <div className="Home bg-lmBgLightGray dark:bg-dmBgVeryDarkBlue w-full h-fit px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6">
        <SearchAndFilter />
        {/* { isPending && <div>Loading...</div> } */}
        <Countries />
      </div>
    </CountriesDataProvider>
  );
}
 
export default Home;