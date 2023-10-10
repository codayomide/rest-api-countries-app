
import React from "react";
import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import CountriesDataProvider from "./CountriesDataProvider";

const Home = () => {
  return ( 
    <CountriesDataProvider>
      <div className="Home bg-lmBgLightGray dark:bg-dmBgVeryDarkBlue w-full h-fit px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6">
        <SearchAndFilter />
        {/* { isPending && <div>Loading...</div> } */}
        <Countries />
      </div>
    </CountriesDataProvider>
  );
}
 
export default Home;