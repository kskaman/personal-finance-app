import { useState, useMemo, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme/theme";
import { CustomThemeContext } from "./CustomThemeContext";

interface ProviderProps {
  children: ReactNode;
}

const CustomThemeProvider = ({ children }: ProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Choose theme based on the state
  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  return (
    <CustomThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
