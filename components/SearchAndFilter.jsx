import { AiOutlineSearch } from 'react-icons/ai/';
import { PiCaretDownBold } from 'react-icons/pi';

const SearchAndFilter = () => {
  return (
    <div className="text-sm flex flex-col items-start md:flex-row md:justify-between h-fit">
      <div className="searchContainer relative w-full md:w-[350px] mb-10 md:mb-0">
        <AiOutlineSearch className="text-lmDarkGray text-[23px] absolute top-[50%] translate-y-[-50%] left-6 " />
        <input type="search" placeholder="Search for a country..." className="block appearance-none w-full bg-white shadow-md text-gray-700 text-[13px] py-4 px-4 pl-[4rem] rounded leading-tight outline-none object-cover" />
      </div>
      
      <div className="filterMenuContainer relative w-[70%] ss:w-[55%] md:w-[200px]">
        <select defaultValue="" className="block appearance-none w-full bg-white shadow-md p-4 rounded leading-tight outline-none">
          <option value="" disabled>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>

        <PiCaretDownBold className="absolute top-[50%] translate-y-[-50%] right-4" />
      </div>
    </div>
  );
}
 
export default SearchAndFilter;