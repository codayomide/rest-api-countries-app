import Image from 'next/image';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import Link from 'next/link';

const Countries = ({ countries }) => {
  const lowerCase = (text) => {
    // // Remove whitespace using regular expression and replace with an empty string
    // const noWhitespaceText = text.replace(/\s+/g, '');
    
    // Convert the text to lowercase
    const lowerCaseText = text.toLowerCase();
    
    return lowerCaseText;
  }

  return (
    <div className="w-full flex flex-col items-center py-9">
      {countries.map((country, index) => (
        <Link 
          href={`/countries/${lowerCase(country.name.common)}`}
          className="country__wrapper bg-neutralWhite shadow-md flex flex-col w-[200px] aspect-[0.8] rounded-md mb-9 overflow-hidden" key={index}
        >
          <img 
            src={country.flags.png} 
            alt="" 
            width={200}
            height={100}
            className="aspect-[1.7] w-full"
          />
          
          <div className="flex-grow flex flex-col justify-center px-2">
            <h1 className="font-extrabold text-lg my-1">{country.name.common}</h1>

            <div className="text-sm">
              <p>
                <span className="font-semibold">Population: </span>
                <span>{country.population.toLocaleString('en-US')}</span>
              </p>
              
              <p>
                <span className="font-semibold">Region: </span>
                <span>{country.region}</span>
              </p>
              
              <p>
                <span className="font-semibold">Capital: </span>
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