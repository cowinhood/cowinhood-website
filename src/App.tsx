import "./App.scss";

import AlertGridForm from "./components/AlertGridForm";
import Box from "@material-ui/core/Box";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import Share from "./components/Share";
import { useTheme } from "@material-ui/core/styles";

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="App">
      {/* Site Header START*/}
      <Box
        bgcolor={theme.palette.primary.main}
        boxShadow={theme.shadows[10]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={theme.spacing(0.2)}
        marginBottom={theme.spacing(0.5)}
      >
        <Header />
      </Box>
      {/* Site Header END*/}

      {/* Site Body START*/}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(0.2)}
      >
        <AlertGridForm />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(1)}
      >
        <Share />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom={theme.spacing(1)}
      >
        <Description />
      </Box>
      {/* Site Body END*/}
      {/* Site Footer START*/}
      <Box>
        <Footer />
      </Box>
      {/* Site Footer END*/}
    </div>
  );
};

export default App;
