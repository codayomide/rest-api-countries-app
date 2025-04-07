import Countries from "@components/Countries";
import SearchAndFilter from "@components/SearchAndFilter";
import { CountriesProvider } from "@utils/customHooks/CountriesContext";
import React from "react";

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v2/all", {
    next: { revalidate: 86400 },
  });

  if (!res.ok) throw new Error("Failed to fetch countries");

  return res.json();
};

const Home = async () => {
  const countries = await getCountries();

  return (
    <CountriesProvider countriesData={countries}>
      <div className="Home bg-lmBgLightGray dark:bg-dmBgVeryDarkBlue w-full h-full flex-grow flex flex-col px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6 relative">
        <SearchAndFilter data={countries} />
        <Countries countries={countries} />
      </div>
    </CountriesProvider>
  );
};

export default Home;

// import React from "react";
// import Countries from "@components/Countries";
// // import SearchAndFilter from "@components/SearchAndFilter";
// // import { useState, useEffect, createContext } from "react";
// // import Loading from "@components/Loading";

// // export const CountriesContext = createContext();

// export async function getStaticProps() {
//   console.log("Running getStaticProps")
//   const res = await fetch("https://restcountries.com/v2/all");
//   const countries = await res.json();

//   return { props: { countries } };
// }

// const Home = ({ countries }) => {
//   // const [countries, setCountries] = useState([]);
//   // const [isPending, setIsPending] = useState(true);
//   // const [isFiltered, setIsFiltered] = useState(false);
//   // const [filteredData, setFilteredData] = useState(countries);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       await fetch("https://restcountries.com/v2/all")
//   //         .then((res) => res.json())
//   //         .then((data) => {
//   //           setCountries(data);
//   //           // setIsPending(false);
//   //         });
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   console.log(countries)

//   return (
//     // <CountriesContext.Provider
//     //   value={{
//     //     isFiltered,
//     //     setIsFiltered,
//     //     countries,
//     //     filteredData,
//     //     setFilteredData,
//     //   }}
//     // >
//       <div className="Home bg-lmBgLightGray dark:bg-dmBgVeryDarkBlue w-full h-full flex-grow flex flex-col px-4 xs:px-6 sm:px-12 xl:px-[65px] py-6 relative">
//         {/* <SearchAndFilter data={countries} /> */}

//         {/* {filteredData && <Countries countries={filteredData} />} */}

//         {/* <Countries countries={countries} /> */}
//       </div>
//     // </CountriesContext.Provider>
//   );
// };

// export default Home;
