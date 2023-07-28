const SearchAndFilter = () => {
  return (
    <div className="text-sm">
      <div className="searchContainer">
        <input type="search" placeholder="Search for a country..." className="block appearance-none w-full bg-white shadow-md text-gray-700 mb-10 py-4 px-4 pl-12 rounded leading-tight outline-none" />
      </div>
      
      <div className="filterMenuContainer">
        <select className="block appearance-none w-[80%] bg-white shadow-md mb-10 p-4 rounded leading-tight outline-none">
          <option value="" disabled selected>Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}
 
export default SearchAndFilter;