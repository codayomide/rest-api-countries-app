"use client"
import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import useFetch from "@components/useFetch";

const Home = () => {
  const { data: countries, isPending, error } = useFetch("http://localhost:3000/api");  

  return ( 
    <div className="Home bg-lmBgLightGray w-full h-fit px-4 py-6">
      <SearchAndFilter />

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { countries && <Countries countries={countries} /> }      
    </div>
  );
}
 
export default Home;