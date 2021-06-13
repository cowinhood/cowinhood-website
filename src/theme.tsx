import { Theme, createMuiTheme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#aff1da",
      dark: "#6d8e46",
      light: "#afd683",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffd600",
      dark: "#b29500",
      light: "#ffde33",
      contrastText: "#000",
    },
  },
});

export default theme;
