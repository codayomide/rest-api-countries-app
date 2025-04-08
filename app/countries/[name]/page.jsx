import React from "react";
import CountryDetails from "@components/CountryDetails";

const CountryDetailsPage = async ({ params }) => {
  const res = await fetch(`https://restcountries.com/v2/name/${params.name}`);
  const currentCountry = await res.json();

  return (
    <div className="countryDetailsPage">
      <CountryDetails countryData={currentCountry} />
    </div>
  );
};

export default CountryDetailsPage;
