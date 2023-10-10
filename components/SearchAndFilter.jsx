"use client";

import Filter from "./Filter";
import Search from "./Search";
import React from "react";

const SearchAndFilter = () => {
  return (
    <div className="text-sm flex flex-col items-start md:flex-row md:justify-between h-fit">
      <Search />
      <Filter />
    </div>
  );
}
 
export default SearchAndFilter;