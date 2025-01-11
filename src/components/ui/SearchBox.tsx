"use client";
import React, { JSX } from "react";

/**
 * SearchBox component that renders an input field for searching projects.
 *
 * @returns {JSX.Element} The rendered SearchBox component.
 */
const SearchBox: React.FC = (): JSX.Element => {
  return (
    <input
      className="z-10 h-full w-[270px] mr-2.5 flex items-center cursor-pointer self-baseline font-poppins font-normal text-base leading-4 mb-2.5 md:mb-0 bg-transparent border-none outline-none focus:ring-0 placeholder-white"
      placeholder="Search for Project"
    />
  );
};

export default SearchBox;
