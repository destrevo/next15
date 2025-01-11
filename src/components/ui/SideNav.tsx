"use client";
import React, { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/app/store/storeContext";
import { NavOptions } from "./common/types";
import { styleByWidth } from "../util/styleByWidth";
import useWindowSize from "../hook/useWindowSize";

interface NavComponentProps {
  options: NavOptions[];
}

/**
 * SideNav component that displays a side navigation bar with options.
 *
 * @param {NavComponentProps} props - The properties for the SideNav component.
 * @param {NavOptions[]} props.options - The navigation options to display.
 * @returns {JSX.Element} The rendered SideNav component.
 */
const SideNav: React.FC<NavComponentProps> = ({ options }): JSX.Element => {
  const { isOpen, toggleNav } = useStore();
  const width = useWindowSize();

  if (!width) return <></>;

  return (
    <div
      className={styleByWidth(width, {
        styleSmall: `absolute top-0 w-[82px] h-[3000px] bg-[rgba(47,18,85,1)] transition-all duration-500 z-20
            ${isOpen ? "left-0" : "-left-[78px]"}
          `,
        styleMedium: `absolute top-0 w-[82px] h-[3000px] bg-[rgba(47,18,85,0.7)] transition-all duration-500 z-10
            ${isOpen ? "left-0" : "-left-[78px]"}
          `,
        styleLarge: `absolute top-0 w-[82px] h-[3000px] bg-[rgba(47,18,85,0.7)] transition-all duration-500 z-10
            ${isOpen ? "left-0" : "-left-[78px]"}
          `,
      })}
    >
      <div className="relative flex justify-center items-center w-full h-[82px]">
        <div
          className={` cursor-pointer absolute w-[24px] h-[24px] transition-all duration-500 rounded-full
    ${isOpen ? "left-[70px]" : "left-[85px]"}
  `}
          onClick={toggleNav}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#402074" />
            <path
              d="M17.7521 12.5883C18.0826 12.2629 18.0826 11.7345 17.7521 11.4091L13.5219 7.24405C13.1914 6.91865 12.6547 6.91865 12.3242 7.24405C11.9937 7.56944 11.9937 8.09788 12.3242 8.42327L15.9569 12L12.3268 15.5767C11.9963 15.9021 11.9963 16.4306 12.3268 16.756C12.6573 17.0813 13.194 17.0813 13.5245 16.756L17.7548 12.5909L17.7521 12.5883ZM8.44556 16.7534L12.6758 12.5883C13.0063 12.2629 13.0063 11.7345 12.6758 11.4091L8.44556 7.24405C8.11507 6.91865 7.57836 6.91865 7.24787 7.24405C6.91738 7.56944 6.91738 8.09788 7.24787 8.42327L10.8806 12L7.25051 15.5767C6.92002 15.9021 6.92002 16.4306 7.25051 16.756C7.581 17.0813 8.11771 17.0813 8.4482 16.756L8.44556 16.7534Z"
              fill="white"
            />
          </svg>
        </div>
        <Image src="/logo.png" alt="logo" width={62} height={62} />
      </div>
      <div className="absolute w-[44px] h-0 left-[18px] top-[74px] border border-[#85709d]" />
      {isOpen &&
        options.map((option, index) => (
          <Link
            key={index}
            href={`${option.path}`}
            className={`${index === 0 ? "mt-2" : null} w-full h-[82px] text-white cursor-pointer text-center flex justify-center border-none self-center items-center hover:bg-customHover`}
          >
            <div>
              <div className="flex justify-center items-center mb-1.5">
                {option.icon}
              </div>
              <span
                className={`${index === 0 ? "pl-3 pr-3" : null} text-[11px] font-poppins tracking-[0.1px] leading-[15px] text-center flex items-center justify-center mt-[10px]`}
              >
                {option.name}
              </span>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SideNav;
