import React, { JSX } from "react";
import { PROJECT_STATUS } from "../common/types";

interface StatusButtonProps {
  status: PROJECT_STATUS;
  callback: () => void;
}

/**
 * Returns a button element with styles and text based on the project status.
 *
 * @param {StatusButtonProps} props - The properties for the status button.
 * @param {PROJECT_STATUS} props.status - The status of the project.
 * @param {() => void} props.callback - The callback function to be called on button click.
 * @returns {JSX.Element} The rendered button element.
 */
export const statusButton = ({
  status,
  callback,
}: StatusButtonProps): JSX.Element => {
  switch (status) {
    case PROJECT_STATUS.PROGRESS:
      return (
        <button
          onClick={callback}
          className="w-[98px] h-[25px] bg-[#8A38F5] rounded-lg flex items-center justify-center cursor-pointer ml-[5px]"
        >
          <div className="w-[87.9px] h-[25px] font-poppins font-medium text-[13px] leading-[13px] flex items-center justify-center text-white">
            In Progress
          </div>
        </button>
      );
    case PROJECT_STATUS.FINISHED:
      return (
        <button
          onClick={callback}
          className="w-[76px] h-[25px] bg-[#a08eae] rounded-lg flex items-center justify-center cursor-pointer ml-[27px]"
        >
          <div className="w-[87.9px] h-[25px] font-poppins font-medium text-[13px] leading-[13px] flex items-center justify-center text-[#1c1725]">
            Finished
          </div>
        </button>
      );
    case PROJECT_STATUS.NEWPROJECT:
      return (
        <button
          onClick={callback}
          className="w-[98px] h-[25px] bg-[#E9335F] rounded-lg flex items-center justify-center cursor-pointer ml-[5px]"
        >
          <div className="w-[87.9px] h-[25px] font-poppins font-medium text-[13px] leading-[13px] flex items-center justify-center text-white">
            New Project
          </div>
        </button>
      );
    default:
      return (
        <button
          onClick={callback}
          className="w-[98px] h-[25px] bg-[#E9335F] rounded-lg flex items-center justify-center cursor-pointer ml-[5px]"
        >
          <div className="w-[87.9px] h-[25px] font-poppins font-medium text-[13px] leading-[13px] flex items-center justify-center text-white">
            New Project
          </div>
        </button>
      );
  }
};
