"use client"

import { useEffect, useState } from "react";

const CountryDetailsPage = ({ params }) => {
  const [currentCountry, setCurrentCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${params.name.toLowerCase()}`)

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
    <>
      {currentCountry.map((country, index) => (
        <div key={index}>
          <p>{country.name.common}</p>
        </div>
      ))}
    </>
  );
}
 
export default CountryDetailsPage;