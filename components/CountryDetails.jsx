import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import BorderCountries from './BorderCountries';
import { useRouter } from 'next/navigation';

const CountryDetails = ({ countryData }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <div className="p-4 xs:p-6 sm:p-12 xl:p-[65px]">
      <button onClick={goBack} className="text-lmVeryDarkBlue bg-neutralWhite dark:text-neutralWhite dark:bg-dmBlue shadow-lg rounded-sm px-5 py-1"><BsArrowLeft className="inline mr-1" /> Back</button>

      {countryData.map((country, index) => (
        <div key={index} className="md:flex md:flex-row md:my-12">
          <img src={country.flags.png} alt="This is a flag" className="aspect-[1.5] w-full md:w-[40%] lg:w-[38%] mb-9 md:mr-[100px] lg:mr-[150px]" />

          <div className="self-center">
            <h1 className="text-xl font-extrabold mb-4">{country.name}</h1>
            <div>
              <div className="flex md:mb-8">
                <div className="mb-8 mr-[100px]">
                  <p className="country__details-text">
                    <span>Native Name: </span>
                    <span>{country.name}</span>
                  </p>
            
                  <p className="country__details-text">
                    <span>Population: </span>
                    <span>{country.population.toLocaleString('en-US')}</span>
                  </p>
            
                  <p className="country__details-text">
                    <span>Region: </span>
                    <span>{country.region}</span>
                  </p>
            
                  <p className="country__details-text">
                    <span>Sub Region: </span>
                    <span>{country.subregion}</span>
                  </p>
            
                  <p className="country__details-text">
                    <span>Capital: </span>
                    <span>{country.capital}</span>
                  </p>
                </div>
                <div className="mb-8">
                  <p className="country__details-text">
                    <span>Top Level Domain: </span>
                    <span>{country.topLevelDomain}</span>
                  </p>
            
                  <p className="country__details-text">
                    <span>Currencies: </span>
                    {country.currencies && country.currencies.map((currency, index) => (
                      <span key={index}>{index > 0 && ', '}{currency.name}</span>
                    ))}
                  </p>
            
                  <p className="country__details-text">
                    <span>Languages: </span>
                    {country.languages && country.languages.map((language, index) => (
                      <span key={index}>{index > 0 && ', '}{language.name}</span>
                    ))}
                  </p>
                </div>
              </div>
              
              <BorderCountries individualCountry={country} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default CountryDetails;