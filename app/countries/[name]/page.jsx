"use client"

import CountryDetails from "@components/CountryDetails";
import { useEffect, useState } from "react";

const CountryDetailsPage = ({ params }) => {
  const [currentCountry, setCurrentCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v2/name/${params.name.toLowerCase()}`)

        .then((res) => res.json())
        .then((data) => {
          setCurrentCountry(data)
          console.log(data[0].name)
        })
      } catch (err) {
        console.log;
      }
    };
    fetchData()
  }, []);
  
  return (
    <div className="countryDetailsPage">
      <CountryDetails countryData={currentCountry} />
    </div>
  );
}
 
export default CountryDetailsPage;