import { createTheme } from "@mui/material";
import { lightPalette, darkPalette } from "./palette";


export const lightTheme = createTheme({
  palette: lightPalette,
  components: {
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
    },
  },
});


export const darkTheme = createTheme({
  palette: darkPalette,
  components: {
    MuiRadio: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
    },
  },
});