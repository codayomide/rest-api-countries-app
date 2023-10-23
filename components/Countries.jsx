import React from 'react';
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import lowerCase from '@utils/utils';

const Countries = ({ countries }) => {
  return (
    // <div className="w-full flex flex-col items-center sm:flex-row flex-wrap justify-around py-9">
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center py-9">
      {countries.map((country, index) => (
        <Link 
          href={`/countries/${lowerCase(country.name)}`}
          className="country__wrapper bg-neutralWhite dark:bg-dmBlue shadow-md flex flex-col w-full xs:w-[350px] sm:w-[250px] md:w-[300px] xl:w-[280px] aspect-[0.85] sm:aspect-[0.75] rounded-md mb-9 overflow-hidden" key={index}
        >
          <img 
            src={country.flags.png} 
            alt="" 
            width={200}
            height={100}
            className="aspect-[1.7] w-full"
          />
          
          <div className="flex flex-col flex-grow justify-center xs:justify-normal xs:mt-5 px-2">
            <h1 className="font-extrabold text-lg xs:text-lg my-1 xs:my-4">{country.name}</h1>

            <div className="text-sm">
              <p>
                <span className="home__details-text">Population: </span>
                <span>{country.population.toLocaleString('en-US')}</span>
              </p>
              
              <p>
                <span className="home__details-text">Region: </span>
                <span>{country.region}</span>
              </p>
              
              <p>
                <span className="home__details-text">Capital: </span>
                <span>{country.capital}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
 
export default Countries;