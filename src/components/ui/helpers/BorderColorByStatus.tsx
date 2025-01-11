import { PROJECT_STATUS } from "../common/types";

/**
 * Returns the appropriate border color class based on the project status.
 *
 * @param {PROJECT_STATUS} status - The status of the project.
 * @returns {string | null} The border color class as a string, or null if the status is FINISHED.
 */
export const borderColorByStatus = (status: PROJECT_STATUS): string | null => {
  switch (status) {
    case PROJECT_STATUS.PROGRESS:
      return "border border-[#8A38F5]";
    case PROJECT_STATUS.FINISHED:
      return null;
    case PROJECT_STATUS.NEWPROJECT:
      return " border border-[#E9335F]";
    default:
      return "border border-[#E9335F]";
  }
};
