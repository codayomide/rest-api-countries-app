import Image from 'next/image';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';

const Countries = ({ countries }) => {
  return (
    <div className="w-full flex flex-col items-center py-9">
      {countries.map((country) => (
        <div className="country__wrapper bg-neutralWhite shadow-md flex flex-col w-[200px] aspect-[0.8] rounded-md mb-9 overflow-hidden" key={country.area}>
          <img src={country.flags.png} alt="" width={200} height={100} className="aspect-[1.7] w-full" />
          
          <div className="flex-grow flex flex-col justify-center px-2">
            <h1 className="font-extrabold text-lg my-1">{country.name}</h1>

            <div className="text-sm">
              <p>
                <span className="font-semibold">Population: </span>
                <span>{country.population}</span>
              </p>
              
              <p>
                <span className="font-semibold">Region: </span>
                <span>{country.region}</span>
              </p>
              
              <p>
                <span className="font-semibold">Capital: </span>
                <span>Berlin</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Countries;