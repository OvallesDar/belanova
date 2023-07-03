import { createTheme } from "@mui/material/styles/";
import { primary, secondary } from "./color-palette";

export const theme = createTheme({
    palette: {
      primary: {main: primary[500], contrastText:"#f4f4f4", transparent: primary['TRAN']},
      secondary: {main: secondary[500], contrastText: "#f4f4f4"},
      textColor: {main: "#151515", contrastText: "#171718"},
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1350,
        xl: 1536,
      },
    }
  })