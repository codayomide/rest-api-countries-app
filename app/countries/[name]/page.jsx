"use client"

import { useEffect, useState } from "react";

const CountryDetailsPage = ({ params }) => {
  const [currentCountry, setCurrentCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}`)

        .then((res) => res.json())
        .then((data) => {
          setCurrentCountry(data)
        })
      } catch (err) {
        console.log;
      }
    };
    fetchData()
  }, []);
  
  return (
    <div>This is {currentCountry.name.common}</div>
  );
}
 
export default CountryDetailsPage;