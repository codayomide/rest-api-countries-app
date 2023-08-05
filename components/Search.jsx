import { AiOutlineSearch } from 'react-icons/ai/';

const Search = () => {
  return (
    <div className="searchContainer relative w-full md:w-[350px] mb-10 md:mb-0">
        <AiOutlineSearch className="text-lmDarkGray text-[23px] absolute top-[50%] translate-y-[-50%] left-6 " />
        <input type="search" placeholder="Search for a country..." className="block appearance-none w-full bg-white shadow-md text-gray-700 text-[13px] py-4 px-4 pl-[4rem] rounded leading-tight outline-none object-cover" />
      </div>
  );
}
 
export default Search;