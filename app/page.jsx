"use client"
import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import useFetch from "@components/useFetch";
import { useState, useEffect } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all')

        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setIsPending(false);
        })
      } catch (err) {
        console.log;
      }
    };
    fetchData()
  }, []);

  return ( 
    <div className="Home bg-lmBgLightGray w-full h-fit px-4 py-6">
      <SearchAndFilter />

      { isPending && <div>Loading...</div> }
      { countries && <Countries countries={countries} /> }      
    </div>
  );
}
 
export default Home;