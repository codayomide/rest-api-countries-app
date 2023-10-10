import React from 'react';

import { useContext, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai/';
import { CountriesContext } from '@app/CountriesDataProvider';
import lowerCase from '@utils/utils';

const Search = () => {
  const [searchInput, setsearchInput] = useState('');

  const { countries, setFilteredData } = useContext(CountriesContext);

  const handleSearch = (e) => {
    setsearchInput(e.target.value);
  }

  useEffect(() => {
    const searchFunction = () => {
      const filteredResults = countries && countries.filter((country) => 
        lowerCase(country.name).includes(lowerCase(searchInput))
      );
      setFilteredData(filteredResults);
      // setIsFiltered(true);
    }

    searchFunction();  
  }, [searchInput, countries]);

  return (
    <div className="searchContainer relative w-full md:w-[350px] mb-10 md:mb-0">
      <AiOutlineSearch className="text-lmDarkGray dark:text-neutralWhite text-[23px] absolute top-[50%] translate-y-[-50%] left-6 " />

      <input
        type="search" 
        placeholder="Search for a country..." 
        className="block appearance-none w-full bg-white dark:bg-dmBlue shadow-md text-gray-700 dark:text-neutralWhite dark:border-none text-[13px] py-4 px-4 pl-[4rem] rounded leading-tight outline-none focus:outline-none object-cover dark:placeholder:text-neutralWhite"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}
 
export default Search;