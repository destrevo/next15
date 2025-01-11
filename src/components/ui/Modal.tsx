"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { PROFILE_IMAGE_MOCK } from "./Header";
import {
  ArrowDownIcon,
  CloseIcon,
  SearchLoopIcon,
  StrategyIcon,
} from "./common/icons";
import { useStore } from "@/app/store/storeContext";
import Dropdown from "./Dropdown";
import { DROPDOWN_TYPE } from "./common/types";

/**
 * Modal component that displays project details and allows assigning loop masters.
 *
 * @returns {JSX.Element | null} The rendered modal component or null if the modal is not open.
 */
const Modal: React.FC = (): JSX.Element | null => {
  // this component should be refactored to get the data from store or props, but it's fine for now, (save time)
  const { isModalOpen, toggleModal, toggleDropdown } = useStore();

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#3e334c] relative p-7 rounded-2xl w-[350px] h-[658px] flex flex-col items-center border border-[#818082]">
        <button
          onClick={toggleModal}
          className="bg-transparent absolute top-[20px] right-[20px]"
        >
          <CloseIcon />
        </button>
        <header className=" w-[197px] h-[40px] left-[622px] top-[148px] font-poppins font-normal text-[20px] leading-[20px] flex items-center justify-center tracking-[0.1px] text-white">
          Project Name 0
        </header>
        <div className=" w-[194px] h-[24px] font-poppins font-normal text-[15px] leading-[18px] text-center text-white mt-[10px] mb-5">
          Assign the loop masters
        </div>
        <div className="flex flex-col justify-between h-[83%]">
          <div>
            <div className="w-[226px] h-[73px] bg-[#372d48] rounded-[10px] flex flex-col items-center p-[5px]">
              <div className="w-[216px] h-[30px] bg-[#9B2BF2] rounded-[8px] flex items-center pl-[10px] font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <span className="mr-2">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0323 1.34965C14.1606 1.34965 14.2837 1.4063 14.3744 1.50712C14.4651 1.60795 14.5161 1.7447 14.5161 1.88729V11.5647C14.5161 11.7073 14.4651 11.844 14.3744 11.9449C14.2837 12.0457 14.1606 12.1023 14.0323 12.1023H1.45161C1.32328 12.1023 1.20021 12.0457 1.10946 11.9449C1.01872 11.844 0.967742 11.7073 0.967742 11.5647V1.88729C0.967742 1.7447 1.01872 1.60795 1.10946 1.50712C1.20021 1.4063 1.32328 1.34965 1.45161 1.34965H14.0323ZM1.45161 0.274384C1.06662 0.274384 0.697398 0.444314 0.425168 0.746792C0.152937 1.04927 0 1.45952 0 1.88729L0 11.5647C0 11.9925 0.152937 12.4027 0.425168 12.7052C0.697398 13.0077 1.06662 13.1776 1.45161 13.1776H14.0323C14.4172 13.1776 14.7865 13.0077 15.0587 12.7052C15.3309 12.4027 15.4839 11.9925 15.4839 11.5647V1.88729C15.4839 1.45952 15.3309 1.04927 15.0587 0.746792C14.7865 0.444314 14.4172 0.274384 14.0323 0.274384H1.45161Z"
                      fill="white"
                    />
                    <path
                      d="M4.83783 6.72487C4.83783 6.58228 4.88881 6.44553 4.97955 6.3447C5.07029 6.24388 5.19337 6.18723 5.3217 6.18723H12.0959C12.2242 6.18723 12.3473 6.24388 12.438 6.3447C12.5288 6.44553 12.5798 6.58228 12.5798 6.72487C12.5798 6.86746 12.5288 7.00421 12.438 7.10503C12.3473 7.20586 12.2242 7.2625 12.0959 7.2625H5.3217C5.19337 7.2625 5.07029 7.20586 4.97955 7.10503C4.88881 7.00421 4.83783 6.86746 4.83783 6.72487ZM4.83783 4.0367C4.83783 3.89411 4.88881 3.75736 4.97955 3.65653C5.07029 3.55571 5.19337 3.49906 5.3217 3.49906H12.0959C12.2242 3.49906 12.3473 3.55571 12.438 3.65653C12.5288 3.75736 12.5798 3.89411 12.5798 4.0367C12.5798 4.17929 12.5288 4.31603 12.438 4.41686C12.3473 4.51769 12.2242 4.57433 12.0959 4.57433H5.3217C5.19337 4.57433 5.07029 4.51769 4.97955 4.41686C4.88881 4.31603 4.83783 4.17929 4.83783 4.0367ZM4.83783 9.41304C4.83783 9.27045 4.88881 9.1337 4.97955 9.03288C5.07029 8.93205 5.19337 8.87541 5.3217 8.87541H12.0959C12.2242 8.87541 12.3473 8.93205 12.438 9.03288C12.5288 9.1337 12.5798 9.27045 12.5798 9.41304C12.5798 9.55563 12.5288 9.69238 12.438 9.79321C12.3473 9.89403 12.2242 9.95068 12.0959 9.95068H5.3217C5.19337 9.95068 5.07029 9.89403 4.97955 9.79321C4.88881 9.69238 4.83783 9.55563 4.83783 9.41304ZM3.87009 4.0367C3.87009 4.17929 3.81911 4.31603 3.72836 4.41686C3.63762 4.51769 3.51455 4.57433 3.38621 4.57433C3.25788 4.57433 3.13481 4.51769 3.04407 4.41686C2.95332 4.31603 2.90234 4.17929 2.90234 4.0367C2.90234 3.89411 2.95332 3.75736 3.04407 3.65653C3.13481 3.55571 3.25788 3.49906 3.38621 3.49906C3.51455 3.49906 3.63762 3.55571 3.72836 3.65653C3.81911 3.75736 3.87009 3.89411 3.87009 4.0367ZM3.87009 6.72487C3.87009 6.86746 3.81911 7.00421 3.72836 7.10503C3.63762 7.20586 3.51455 7.2625 3.38621 7.2625C3.25788 7.2625 3.13481 7.20586 3.04407 7.10503C2.95332 7.00421 2.90234 6.86746 2.90234 6.72487C2.90234 6.58228 2.95332 6.44553 3.04407 6.3447C3.13481 6.24388 3.25788 6.18723 3.38621 6.18723C3.51455 6.18723 3.63762 6.24388 3.72836 6.3447C3.81911 6.44553 3.87009 6.58228 3.87009 6.72487ZM3.87009 9.41304C3.87009 9.55563 3.81911 9.69238 3.72836 9.79321C3.63762 9.89403 3.51455 9.95068 3.38621 9.95068C3.25788 9.95068 3.13481 9.89403 3.04407 9.79321C2.95332 9.69238 2.90234 9.55563 2.90234 9.41304C2.90234 9.27045 2.95332 9.1337 3.04407 9.03288C3.13481 8.93205 3.25788 8.87541 3.38621 8.87541C3.51455 8.87541 3.63762 8.93205 3.72836 9.03288C3.81911 9.1337 3.87009 9.27045 3.87009 9.41304Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Briefing loop
              </div>
              <div className="w-[216px] h-[30px] flex items-center pt-2 font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <div className="w-[25px] h-[25px] rounded-full bg-[#cda8ff] border border-white flex items-center justify-center overflow-hidden mr-2">
                  <Image
                    src={PROFILE_IMAGE_MOCK}
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
                LM Name
              </div>
            </div>

            <div className="w-[226px] h-[73px] bg-[#372d48] rounded-[10px] flex flex-col items-center p-[5px] mt-[15px]">
              <div className="w-[216px] h-[30px] bg-[#8A38F5] rounded-[8px] flex items-center pl-[10px] font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <span className="mr-2">
                  <SearchLoopIcon />
                </span>
                Research loop
              </div>
              <div
                onClick={() => {
                  toggleDropdown(DROPDOWN_TYPE.RESEARCH);
                }}
                className="w-[216px] h-[30px] relative cursor-pointer flex items-center pr-1 pl-1 justify-between pt-2 font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white"
              >
                <div className="w-[142px] h-[21px] left-[620px] top-[375px] font-poppins font-normal text-[13px] leading-[0px] flex items-center text-[#A08EAE]">
                  Choose loop master
                </div>
                <div className="pl-[55px]">
                  <ArrowDownIcon />
                </div>
                <Dropdown
                  options={[
                    { label: "Derek", onClick: () => alert("All") },
                    { label: "Another PM", onClick: () => alert("New") },
                    { label: "Something", onClick: () => alert("In Progress") },
                  ]}
                  id={DROPDOWN_TYPE.RESEARCH}
                />
              </div>
            </div>

            <div className="w-[226px] h-[73px] bg-[#372d48] rounded-[10px] flex flex-col items-center p-[5px] mt-[15px]">
              <div className="w-[216px] h-[30px] left-[644px] top-[248px] bg-[#7234f8] rounded-[8px] flex items-center pl-[10px] font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <span className="mr-2">
                  <StrategyIcon />
                </span>
                Strategy loop
              </div>
              <div
                onClick={() => {
                  toggleDropdown(DROPDOWN_TYPE.STRATEGY);
                }}
                className="w-[216px] h-[30px] relative cursor-pointer flex items-center pr-1 pl-1 justify-between pt-2 font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white"
              >
                <div className="w-[142px] h-[21px] left-[620px] top-[375px] font-poppins font-normal text-[13px] leading-[0px] flex items-center text-[#A08EAE]">
                  Choose loop master
                </div>
                <div className="pl-[55px]">
                  <ArrowDownIcon />
                </div>
                <Dropdown
                  options={[
                    { label: "One", onClick: () => alert("One") },
                    { label: "OneOne", onClick: () => alert("OneOne") },
                    { label: "NotOne", onClick: () => alert("NotOne") },
                  ]}
                  id={DROPDOWN_TYPE.STRATEGY}
                />
              </div>
            </div>

            <div className="w-[226px] h-[73px] bg-[#372d48] rounded-[10px] flex flex-col items-center p-[5px] mt-[15px]">
              <div className="w-[216px] h-[30px] bg-[#389AF5] rounded-[8px] flex items-center pl-[10px] font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <span className="mr-2">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.5 0C7.58698 2.9208e-06 7.67224 0.0242236 7.74625 0.0699523C7.82026 0.115681 7.8801 0.181114 7.91906 0.258932L8.25938 0.938158H12.6562C13.0292 0.938158 13.3869 1.08642 13.6506 1.35033C13.9143 1.61424 14.0625 1.97217 14.0625 2.3454V10.3197H14.5312C14.6556 10.3197 14.7748 10.3692 14.8627 10.4571C14.9506 10.5451 15 10.6644 15 10.7888C15 10.9132 14.9506 11.0325 14.8627 11.1205C14.7748 11.2085 14.6556 11.2579 14.5312 11.2579H11.85L12.6422 14.4279C12.6691 14.5475 12.6481 14.6728 12.5839 14.7771C12.5196 14.8814 12.4171 14.9564 12.2983 14.986C12.1795 15.0157 12.0539 14.9977 11.9482 14.9358C11.8425 14.8739 11.7652 14.7731 11.7328 14.655L11.3531 13.1342H3.64688L3.26719 14.655C3.23481 14.7731 3.15751 14.8739 3.05182 14.9358C2.94614 14.9977 2.82046 15.0157 2.70166 14.986C2.58286 14.9564 2.48037 14.8814 2.41612 14.7771C2.35186 14.6728 2.33093 14.5475 2.35781 14.4279L3.15 11.2579H0.46875C0.34443 11.2579 0.225201 11.2085 0.137294 11.1205C0.049386 11.0325 0 10.9132 0 10.7888C0 10.6644 0.049386 10.5451 0.137294 10.4571C0.225201 10.3692 0.34443 10.3197 0.46875 10.3197H0.9375V2.3454C0.9375 1.97217 1.08566 1.61424 1.34938 1.35033C1.6131 1.08642 1.97079 0.938158 2.34375 0.938158H6.74156L7.08094 0.258932C7.1199 0.181114 7.17974 0.115681 7.25375 0.0699523C7.32776 0.0242236 7.41302 2.9208e-06 7.5 0ZM1.875 10.3197H13.125V2.3454C13.125 2.22099 13.0756 2.10168 12.9877 2.01371C12.8998 1.92574 12.7806 1.87632 12.6562 1.87632H2.34375C2.21943 1.87632 2.1002 1.92574 2.01229 2.01371C1.92439 2.10168 1.875 2.22099 1.875 2.3454V10.3197ZM10.8844 11.2579H4.11562L3.88125 12.1961H11.1187L10.8844 11.2579Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Presentation
              </div>
              <div className="w-[216px] h-[30px] flex items-center pt-2 font-poppins font-normal text-[11px] leading-[20px] tracking-[0.1px] text-white">
                <div className="w-[25px] h-[25px] rounded-full bg-[#cda8ff] border border-white flex items-center justify-center overflow-hidden mr-2">
                  <Image
                    src={PROFILE_IMAGE_MOCK}
                    alt="user"
                    width={40}
                    height={40}
                  />
                </div>
                LM Name
              </div>
            </div>
          </div>
          <button
            onClick={() => alert("Confirm")}
            className=" w-[226px] h-[40px] left-[607px] top-[714px] bg-[#8a37f5] rounded-[8px] flex items-center justify-center font-poppins font-medium text-[15px] leading-[15px] text-center text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
