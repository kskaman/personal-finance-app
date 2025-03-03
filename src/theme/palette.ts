import { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: "#201f24",       // grey-900
    light: "#696868",      // grey-500
    dark: "#98908b",       // beige-500
    contrastText: "#ffffff", // white
  },
  secondary: {
    main: "#277c78",       // green
    light: "#82c9d7",      // cyan
    dark: "#c94736",       // red
    contrastText: "#f2f2f2", // grey-100
  },
  background: {
    default: "#f8f4f0",    // beige-100
    paper: "#b3b3b3",      // grey-300
  },
  text: {
    primary: "#ffffff",    // white
    secondary: "#f2cdac",  // yellow
  },
  others: {
    pink: "#af81ba",       // pink
    turquoise: "#597c7c",  // turquoise
    brown: "#93674f",      // brown
    magenta: "#934f6f",    // magenta
    blue: "#3f82b2",       // blue
    navyGrey: "#97a0ac",   // navy-grey
    armyGreen: "#7f9161",  // army-green
    gold: "#cab361",       // gold
    orange: "#be6c49",     // orange
    purple: "#826cb0",     // purple
    navy: "#626070",       // navy
    green: "#277c78",      // green
    cyan: "#82c9d7",       // cyan
    red: "#c94736",        // red
    yellow: "#f2cdac",     // yellow
  },
};




export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: "#ffffff",
    light: "#f5f7fa",
    dark: "#e0e4e4",
    contrastText: "#525866",
  },
  secondary: {
    main: "#cacfd8",
    light: "#6fa6f1",
    dark: "#99a0ae",
    contrastText: "#cfd8dc",
  },
  background: {
    default: "#232530",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#e0e0e0",    // Off-white for main text
    secondary: "#a8a8a8",  // Muted gray for subtext
  },
  others: {
    pink: "#b85b7e",       // Deep pink for slight contrast
    turquoise: "#5e9ea0",  // Muted turquoise
    brown: "#8c6450",      // Warm brown
    magenta: "#a6508f",    // Deep magenta
    blue: "#4a90e2",       // Bright but soft blue
    navyGrey: "#5c6b7e",   // Desaturated navy-gray
    armyGreen: "#6a7f58",  // Subdued army green
    gold: "#bfa055",       // Classy, muted gold
    orange: "#d67d3b",     // Soft orange
    purple: "#8a6bb1",     // Soft purple
    navy: "#475569",       // Blue-gray navy
    green: "#68b168",      // Subtle green
    cyan: "#5eaec7",       // Balanced cyan
    red: "#d15252",        // Gentle red
    yellow: "#e0c66d",     // Muted yellow
  },
};
