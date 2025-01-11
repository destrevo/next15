import { useState, useEffect } from "react";

/**
 * Custom hook that returns the current window width.
 *
 * This hook listens for window resize events and updates the width state
 * accordingly. It returns the current window width.
 *
 * @returns {number} The current window width.
 *
 * @example
 * const width = useWindowSize();
 * console.log(width); // Logs the current window width
 */
const useWindowSize = (): number => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWindowSize;
