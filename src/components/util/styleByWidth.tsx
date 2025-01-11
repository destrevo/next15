interface Styles {
  styleSmall: string;
  styleMedium: string;
  styleLarge: string;
}

/**
 * Returns the appropriate style based on the given width.
 *
 * @param width - The width to determine the style.
 * @param styles - An object containing the styles for different width ranges.
 * @returns The style corresponding to the given width.
 *
 * @example
 * const styles = {
 *   styleSmall: "text-sm mb-5",
 *   styleMedium: "text-md mb-0",
 *   styleLarge: "text-lg mb-0",
 * };
 * const currentStyle = styleByWidth(width, styles);
 */
export const styleByWidth = (width: number, styles: Styles): string => {
  const { styleSmall, styleMedium, styleLarge } = styles;
  if (width <= 768) {
    return styleSmall;
  }
  if (width <= 1120) {
    return styleMedium;
  }
  return styleLarge;
};
