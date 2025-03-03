import { createContext } from "react";

interface CustomThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<CustomThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
});
