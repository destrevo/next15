"use client";
import React, { JSX } from "react";
import "./styles/hack.css";
import SearchIcon, { OptionsIcon } from "./common/icons";
import Link from "next/link";
import SearchBox from "./SearchBox";
import ProjectsList from "./ProjectsList";
import { useStore } from "@/app/store/storeContext";
import Dropdown from "./Dropdown";
import {
  DROPDOWN_TYPE,
  DropDownOptions,
  MainContentWrapperProps,
} from "./common/types";
import useWindowSize from "../hook/useWindowSize";
import { styleByWidth } from "../util/styleByWidth";

const dropDownOptions: DropDownOptions[] = [
  { label: "All", onClick: () => alert("All") },
  { label: "New", onClick: () => alert("New") },
  { label: "In Progress", onClick: () => alert("In Progress") },
  { label: "Finished", onClick: () => alert("Finished") },
];

/**
 * MainContentWrapper component that wraps the main content of the page.
 *
 * @param {MainContentWrapperProps} props - The properties for the MainContentWrapper component.
 * @param {string} [props.pageName="Home"] - The name of the page to display.
 * @returns {JSX.Element} The rendered MainContentWrapper component.
 */
const MainContentWrapper: React.FC<MainContentWrapperProps> = ({
  pageName = "Home",
}): JSX.Element => {
  const { isOpen, toggleDropdown } = useStore();
  const width = useWindowSize();

  if (!width) return <></>;

  return (
    <div
      className={styleByWidth(width, {
        styleSmall: `transition-all duration-500`,
        styleMedium: `transition-all duration-500 ${isOpen ? "pl-[82px]" : "pl-0"}`,
        styleLarge: `transition-all duration-500 ${isOpen ? "pl-[82px]" : "pl-0"}`,
      })}
    >
      <main
        className={`w-full h-full flex justify-center items-center pt-7 pr-[10px] pl-[10px]`}
      >
        <section className="main-content">
          <header
            className={styleByWidth(width, {
              styleSmall: "w-[95%] flex flex-col items-center p-2.5 mt-3.5",
              styleMedium:
                "w-[95%] flex flex-row justify-between items-center p-2.5 mt-3.5",
              styleLarge:
                "w-[95%] flex flex-row justify-between items-center p-2.5 mt-3.5",
            })}
          >
            <h1 className="font-poppins font-semibold text-4xl leading-tight flex items-center tracking-tight text-white mb-2.5">
              {pageName}
            </h1>
            <div className="flex items-center">
              <div className="flex flex-row items-center px-4 w-[329px] min-w-60 h-10 border border-white rounded-lg mr-5">
                <SearchBox />
                <Link
                  className="flex items-center cursor-pointer z-10"
                  href="/"
                >
                  <SearchIcon />
                </Link>
              </div>
              <Link
                onClick={() => toggleDropdown(DROPDOWN_TYPE.SEARCH)}
                href="/"
                className="flex items-center cursor-pointer z-10 relative"
              >
                <OptionsIcon />
                <Dropdown options={dropDownOptions} id={DROPDOWN_TYPE.SEARCH} />
              </Link>
            </div>
          </header>
          <section className="relative w-[95%] h-[80%] mt-5 bg-[#30273F] mb-12 rounded-xl pr-[20px] pl-[15px] pt-[30px] pb-[45px]">
            <ProjectsList />
          </section>
        </section>
      </main>
    </div>
  );
};

export default MainContentWrapper;
