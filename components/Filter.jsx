import React, { useEffect } from "react";

import { useState } from "react";
import lowerCase from "@utils/utils";
import { useCountries } from "@utils/customHooks/CountriesContext";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const { countries, setFilteredData } = useCountries();

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    console.log(selectedValue);
  };

  useEffect(() => {
    const filterFunction = () => {
      const filteredResults = countries.filter(
        (country) => lowerCase(country.region) === lowerCase(selectedValue)
      );
      setFilteredData(filteredResults);
    };

    filterFunction();
  }, [selectedValue]);

  return (
    <div className="filterMenuContainer relative w-[70%] ss:w-[55%] md:w-[200px]">
      <select
        onChange={handleSelectChange}
        className="block appearance-none w-full bg-white dark:bg-dmBlue dark:border-none shadow-md px-4 py-3 rounded leading-tight outline-none focus:outline-none"
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
        <option value="polar">Polar</option>
      </select>
    </div>
  );
};

export default Filter;
