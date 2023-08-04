import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';

const CountryDetails = ({ countryData }) => {
  return (
    <div className="p-4 xs:p-6 sm:p-12 xl:p-[65px]">
      <button className="text-lmVeryDarkBlue bg-neutralWhite shadow-lg px-5 py-1"><BsArrowLeft className="inline mr-1" /> Back</button>

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
              <div className="md:flex md:flex-row md:items-center">
                <h1 className="font-semibold mb-2 md:mr-4">Border Countries:</h1>
                <div className="flex flex-row flex-wrap">
                  {country.borders && country.borders.map((borderCountry, index) => (
                    <button key={index} className="text-lmVeryDarkBlue bg-neutralWhite shadow-lg mr-2 mb-4 px-4 py-1">{borderCountry}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default CountryDetails;