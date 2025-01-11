import { PROJECT_STATUS } from "../common/types";

/**
 * Returns a Tailwind CSS class string for the background color based on the project status and whether it should be darker.
 *
 * @param {PROJECT_STATUS} status - The status of the project.
 * @param {boolean} isDarker - Whether the background color should be darker.
 * @returns {string} The Tailwind CSS class string for the background color.
 */
export const backgroundByStatus = (
  status: PROJECT_STATUS,
  isDarker: boolean,
): string => {
  switch (status) {
    case PROJECT_STATUS.PROGRESS:
      return isDarker ? "bg-[#3a2d5f]" : "bg-[#49397A]";
    case PROJECT_STATUS.FINISHED:
      return isDarker ? "bg-[#3d324a]" : "bg-[#4D405E]";
    case PROJECT_STATUS.NEWPROJECT:
      return isDarker ? "bg-[#4b323a]" : "bg-[#5e404b]";
    default:
      return "bg-[#E9335F]";
  }
};
