"use client"

import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import { useState, useEffect, createContext } from "react";

export const CountriesContext = createContext();

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://restcountries.com/v2/all')

        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setIsPending(false);
        })
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return ( 
    <CountriesContext.Provider value={{ isFiltered, setIsFiltered, countries }}>
      <div className="Home bg-lmBgLightGray w-full h-fit px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6">
        <SearchAndFilter data={countries} />
        { isPending && <div>Loading...</div> }
        { countries && <Countries countries={countries} /> }
      </div>
    </CountriesContext.Provider>
  );
}
 
export default Home;