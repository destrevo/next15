import { JSX } from "react";

export enum PROJECT_STATUS {
  PROGRESS = 0,
  FINISHED = 1,
  NEWPROJECT = 3,
}

export enum DROPDOWN_TYPE {
  SEARCH = 0,
  RESEARCH = 1,
  STRATEGY = 2,
}

export type DropDownOptions = {
  label: string;
  onClick: () => void;
};

export type MainContentWrapperProps = {
  pageName: string;
};

export type Project = {
  name: string;
  status: PROJECT_STATUS;
  progress: string;
  id: string;
  hasAttachment: boolean;
};

export type NavOptions = {
  name: string;
  path: string;
  icon: JSX.Element;
};
