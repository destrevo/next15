"use client";
import { useStore } from "@/app/store/storeContext";
import React, { useEffect, useRef } from "react";
import { DROPDOWN_TYPE, DropDownOptions } from "./common/types";

interface DropdownProps {
  options?: DropDownOptions[];
  id: DROPDOWN_TYPE;
}

/**
 * A dropdown component that displays a list of options.
 *
 * @param {DropdownProps} props - The properties for the dropdown component.
 * @param {DropDownOptions[]} [props.options=[]] - The options to display in the dropdown.
 * @param {DROPDOWN_TYPE} props.id - The unique identifier for the dropdown.
 * @returns {JSX.Element} The rendered dropdown component.
 */
const Dropdown: React.FC<DropdownProps> = ({ options = [], id }) => {
  // The outSideClick funcionality should be moved to a custom hook, but it's fine for now
  const { isDropdownOpen, dropDownId, toggleDropdown } = useStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOpen = isDropdownOpen && dropDownId === id;

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      toggleDropdown(null);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {isOpen && (
        <div className="origin-top-right absolute z-30 right-0 mt-2 w-[150px] rounded-md shadow-lg bg-[#323232] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.label}
                className="w-full text-start pl-5 block px-4 py-2 text-sm hover:bg-purple-500 hover:text-white"
                role="menuitem"
                onClick={option.onClick}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
