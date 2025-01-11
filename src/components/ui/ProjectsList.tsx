"use client";
import React, { JSX } from "react";
import { ArrowRightIcon, DownloadIcon, MoreInfoIcon } from "./common/icons";
import Link from "next/link";
import { statusButton } from "./helpers/StatusButton";
import { backgroundByStatus } from "./helpers/BackgroundByStatus";
import { borderColorByStatus } from "./helpers/BorderColorByStatus";
import { mockProjects, PROJECT_STATUS } from "../mock/mock";
import { useStore } from "@/app/store/storeContext";

/**
 * ProjectsList component that displays a list of projects with their details.
 *
 * @returns {JSX.Element} The rendered ProjectsList component.
 */
const ProjectsList = (): JSX.Element => {
  const { toggleModal } = useStore();
  let previousStatus: PROJECT_STATUS | null = null;
  let isDarker = false;

  return (
    <div className="w-full h-full custom-scrollbar overflow-y-scroll">
      {mockProjects.map((project) => {
        if (previousStatus === project.status) {
          isDarker = !isDarker;
        } else {
          isDarker = false;
        }
        previousStatus = project.status;

        return (
          <div
            key={project.id}
            className={`w-[98%] min-h-[63px] md:max-h-[63px] ${backgroundByStatus(project.status, isDarker)} mt-2 rounded-[10px] ${borderColorByStatus(project.status)} flex flex-wrap justify-between items-center md:flex-nowrap md:justify-between`}
          >
            <div className="flex flex-wrap items-center justify-center m-4">
              <div className="w-[154px] h-[41px] font-poppins font-medium text-[17px] leading-[20px] flex items-center tracking-[0.1px] text-white">
                {project.name}
              </div>
              <div className="w-[47px] h-[41px] font-poppins font-medium text-[20px] leading-[20px] flex items-center justify-center tracking-[0.1px] text-[#A08EAE] ml-2 mr-4">
                {project.progress}
              </div>
              <div className="w-[154px] h-[16px] font-poppins font-normal text-[11px] leading-[11px] flex items-end text-[#A08EAE]">
                Project ID: {project.id}
              </div>
              {project.hasAttachment && (
                <div
                  onClick={() => alert("download")}
                  className="w-[133px] h-[40px] border border-white rounded-lg box-border flex items-center justify-center cursor-pointer ml-4"
                >
                  <div className="w-[140px] h-[16px] font-poppins font-medium text-[15px] leading-[15px] text-white flex justify-evenly">
                    Download
                    <DownloadIcon />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-row items-center gap-5 mr-5 ">
              <div className="flex items-center">
                <div className="w-[57px] h-[27px] font-poppins font-normal text-[11px] leading-[20px] flex items-center tracking-[0.1px] text-[#A08EAE]">
                  More Info
                </div>
                <Link onClick={() => alert("more info")} href="/">
                  <MoreInfoIcon />
                </Link>
              </div>
              {statusButton({ status: project.status, callback: toggleModal })}
              <Link onClick={() => alert("arrow")} href="/">
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
