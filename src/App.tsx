import "./App.scss";

import AlertForm from "./components/AlertForm";
import Box from "@material-ui/core/Box";
import Footer from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import Share from "./components/Share";
import { useTheme } from "@material-ui/core/styles";

const App: React.FC = () => {
  const theme = useTheme();

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#f5f186",
        background: "linear-gradient(315deg, #f5f186 0%, #9dfbc8 74%)",
      }}
    >
      {/* Site Header START*/}
      <Box
        bgcolor={theme.palette.primary.main}
        boxShadow={theme.shadows[10]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={theme.spacing(0.2)}
        marginBottom={theme.spacing(1)}
      >
        <Header />
      </Box>
      {/* Site Header END*/}
      CowinHood is unlike others.

      This not just the fastest telegram bot for CoWin slots, but fastest in deliverying them to YOU.

      Cowinhood doesn't just send 1 alert per minute for open sessions. It updates telegram messages with real time slot changes (multiple times per second).

      The benefits are two-fold: avoiding redundant alerts for districts with abundant availability of slots, and for real time tracking of slot changes for districts with scarce availability of slots.

      In other words, you will see slots filling up in REAL time, and you won't get annoyed with 1000+ alerts per day for your city, if you're only interested in a nearby vaccination center.

      For tech folks:

      CowinHood is built with love using asynchronous IO, telegram token pooling, session history tracking, aggregation and intelligent inference of relevant changes. The fact that it is fastest at polling cowin servers (1000s of times per second), is built to scale with fine grained locks and a highly parallelizable shared-nothing actor programming model, aren't even it's biggest highlights.
      Everything is configurable and the config and metrics are open for the world to see.

      Please reach out on twitter if you want more cities or districts added.
      {/* Site Body START*/}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom={theme.spacing(0.2)}
      >
        <AlertForm />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginBottom="-50px"
      >
        <Share />
      </Box>
      {/* Site Body END*/}

      {/* Site Footer START*/}
      <Box
        position="absolute"
        bottom={theme.spacing(0.5)}
        height="25px"
        left="0"
        right="0"
      >
        <Footer />
      </Box>
      {/* Site Footer END*/}
    </div>
  );
};

export default App;
