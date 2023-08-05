import { PiCaretDownBold } from 'react-icons/pi';

const Filter = () => {
  return (
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
  );
}
 
export default Filter;