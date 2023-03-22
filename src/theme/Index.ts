import colors from "@/styles/colors/colors.module.scss";
import "@mui/material/styles/createPalette";
import { createTheme, ThemeOptions } from "@mui/material";
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    tan: string;
    lightRed: string;
    red: string;
    offBlack: string;
  }
}
0;
const customTheme: ThemeOptions = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: colors.primaryMain,
      dark: colors.primaryDark,
      light: colors.primaryLight2,
    },
    secondary: {
      main: colors.textMain,
      dark: colors.textDark,
      200: colors.accentMain,
      300: colors.accentLight1,
    },
    success: { main: colors.successMain, light: colors.successLight },
    error: { main: colors.error, light: colors.errorLight },
    grey: {
      50: colors.greyMain,
      100: colors.greyLight1,
      200: colors.greyLight2,
      300: colors.greyLight3,
      400: colors.greyLight4,
      500: colors.greyLight5,
      600: colors.greyLight6,
      700: colors.greyLight7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "13px",
          borderRadius: "16px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          padding: "10px",
        },
        message: {
          padding: "8px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.primaryDark,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  },
});

export default customTheme;
