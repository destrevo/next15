import {
  MyProjectsIcon,
  AllProjectsIcon,
  MessagesIcon,
  AllContactsIcon,
} from "./icons";
import React from "react";
import { NavOptions } from "./types";

export const navOptions: NavOptions[] = [
  {
    name: "My projects",
    path: "/",
    icon: <MyProjectsIcon />,
  },
  {
    name: "All projects",
    path: "/all-projects",
    icon: <AllProjectsIcon />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <MessagesIcon />,
  },
  {
    name: "All contacts",
    path: "/all-contacts",
    icon: <AllContactsIcon />,
  },
];
