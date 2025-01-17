"use client";
import { useState, useEffect } from "react";

/**
 * Custom hook that returns the current window width.
 *
 * This hook listens for window resize events and updates the width state
 * accordingly. It returns the current window width.
 *
 * @returns {number | null} The current window width.
 *
 * @example
 * const width = useWindowSize();
 * console.log(width); // Logs the current window width
 */
const useWindowSize = (): number | null => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      setWidth(window.innerWidth); // Set initial width
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return width ?? null;
};

export default useWindowSize;
