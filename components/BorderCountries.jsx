import Link from "next/link";
import { useState, useEffect } from "react";

const BorderCountries = ({ individualCountry }) => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://restcountries.com/v2/all')

        .then((res) => res.json())
        .then((data) => {
          setAllCountries(data);
        })
      } catch (err) {
        console.log;
      }
    };
    fetchData()
  }, []);

  const getFullName = (country, data) => {
    data.map(targetData => {
      if (country === targetData.alpha3Code) {
        country = targetData.name
      }
    })

    return country;
  }

  return (
    <div className="md:flex md:flex-row md:items-center">
      <h1 className="font-semibold mb-2 md:mr-4">Border Countries:</h1>
      <div className="flex flex-row flex-wrap">
        {individualCountry.borders && individualCountry.borders.map((borderCountry, index) => (
          <Link 
            href={`/countries/${getFullName(borderCountry, allCountries)}`} 
            key={index} 
            className="text-lmVeryDarkBlue bg-neutralWhite shadow-lg mr-2 mb-4 px-4 py-1"
          >{getFullName(borderCountry, allCountries)}</Link>
        ))}
      </div>
    </div>
  );
}
 
export default BorderCountries;