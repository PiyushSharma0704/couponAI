import React, { createContext, useContext, useMemo } from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import { darkTheme, lightTheme, AppTheme } from "@/constants/theme";

type ThemeContextType = {
  theme: AppTheme;
  colorScheme: ColorSchemeName;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  const value = useMemo(
    () => ({ theme, colorScheme, isDark }),
    [theme, colorScheme, isDark]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside <ThemeProvider>");
  }
  return context;
};