import { DROPDOWN_TYPE } from "@/components/ui/common/types";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StoreContextProps {
  isOpen: boolean;
  toggleNav: () => void;
  isDropdownOpen: boolean;
  toggleDropdown: (id: number | null) => void;
  dropDownId: number;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

/**
 * StoreProvider component that provides the store context to its children.
 *
 * @param {ReactNode} children - The children components that will have access to the store context.
 * @returns {JSX.Element} The rendered StoreProvider component.
 */
export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropDownId, setDropDownId] = useState(0);

  /**
   * Toggles the navigation state.
   */
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Toggles the dropdown state and sets the dropdown ID.
   *
   * @param {DROPDOWN_TYPE | null} id - The ID of the dropdown to toggle.
   */
  const toggleDropdown = (id: DROPDOWN_TYPE | null) => {
    setIsDropdownOpen(!isDropdownOpen);
    if (typeof id === "number") {
      setDropDownId(id);
    }
  };

  /**
   * Toggles the modal state.
   */
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StoreContext.Provider
      value={{
        isOpen,
        toggleNav,
        isDropdownOpen,
        toggleDropdown,
        dropDownId,
        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

/**
 * Custom hook to use the store context.
 *
 * @returns {StoreContextProps} The store context.
 * @throws {Error} If used outside of a StoreProvider.
 */
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
