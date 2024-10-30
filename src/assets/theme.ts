import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      light: "rgba(35, 172, 230, 0.5)",
      main: "#23ACE6",
      dark: "#1878a1",
      contrastText: "#fff",
    },
  },
});

export default theme;
