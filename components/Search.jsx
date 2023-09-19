import React from 'react';

import { useContext, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai/';
import { CountriesContext } from '@app/page';
import lowerCase from '@utils/utils';

const Search = () => {
  const [searchInput, setsearchInput] = useState('');

  const { setIsFiltered, countries, filteredData, setFilteredData } = useContext(CountriesContext);

  // const lowerCase = (text) => {
  //   const lowerCaseText = text.toLowerCase();
    
  //   return lowerCaseText;
  // }

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
    console.log(filteredData);
  }

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = countries.filter((country) => 
        lowerCase(country.name).includes(lowerCase(searchInput))
      );
      setFilteredData(filteredResults);
      setIsFiltered(true);
    }

    searchFunction(searchInput);  
  }, [searchInput, countries]);

  return (
    <div className="searchContainer relative w-full md:w-[350px] mb-10 md:mb-0">
      <AiOutlineSearch className="text-lmDarkGray text-[23px] absolute top-[50%] translate-y-[-50%] left-6 " />

      <input
        type="search" 
        placeholder="Search for a country..." 
        className="block appearance-none w-full bg-white shadow-md text-gray-700 text-[13px] py-4 px-4 pl-[4rem] rounded leading-tight outline-none object-cover"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
 
export default Search;