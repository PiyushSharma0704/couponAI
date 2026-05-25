import { darkColors, lightColors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

const radius = {
  sm: 12,
  md: 20,
  lg: 28,
  xl: 36,
} as const;

export const lightTheme = {
  colors: lightColors,
  spacing,
  typography,
  radius,
} as const;

export const darkTheme = {
  colors: darkColors,
  spacing,
  typography,
  radius,
} as const;

export type AppTheme = typeof lightTheme;