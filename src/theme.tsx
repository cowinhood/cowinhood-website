import { Theme, createMuiTheme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#aff1da",
      light: "#afd683",
      contrastText: "#fff",
      dark: "#0d6efd",
    },
    secondary: {
      main: "#ffd600",
      dark: "#b29500",
      light: "#ffde33",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["lato", "regular"].join(","),
  },
});

export default theme;
