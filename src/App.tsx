import "./App.scss";

import React, { useState } from "react";
import { createStyles, useTheme } from "@material-ui/core/styles";

import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import TelegramIcon from "@material-ui/icons/Telegram";
import TextField from "@material-ui/core/TextField";
import { Theme } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import Typography from "@material-ui/core/Typography";
import data from "./data.json";
import logo from "./logo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedGroup, setSelectedGroupd] = useState("");

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
        <Box marginRight={theme.spacing(0.2)}>
          <img height="100px" width="100px" src={logo} alt="Cowinhood logo" />
        </Box>
        <Typography variant="h3">Cowinhood</Typography>
      </Box>
      {/* Site Header END*/}

      {/* Site Body START*/}
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          boxShadow={theme.shadows[1]}
          bgcolor={theme.palette.primary.contrastText}
          padding={theme.spacing(0.5)}
          borderRadius={8}
        >
          <Box marginBottom={theme.spacing(0.5)}>
            <Typography variant="h4">Telegram Alerts</Typography>
            <Typography variant="subtitle1">(Age group: 18-44)</Typography>
          </Box>
          <Box>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                window.open(`https://t.me/${selectedGroup}`, "_blank"); //to open new page
              }}
            >
              <Box marginBottom={theme.spacing(0.5)}>
                <Autocomplete
                  id="search-cities"
                  options={data.telegram_bots}
                  getOptionLabel={(option) => option.name}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="City" variant="outlined" />
                  )}
                  onChange={(_, val) => {
                    if (!!val && !!val.chat_id) {
                      setSelectedGroupd(val.chat_id);
                    }
                  }}
                />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<TelegramIcon />}
                disabled={!selectedGroup}
                type="submit"
              >
                Join {selectedGroup}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
      {/* Site Body END*/}

      {/* Site Footer START*/}
      <Box position="absolute" bottom={theme.spacing(0.5)} left="0" right="0">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box marginRight={theme.spacing(0.1)}>
            <Link
              href="https://github.com/cowinhood/cowinhood.github.io"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <GitHubIcon />
            </Link>
          </Box>
          {" | "}
          <Box marginRight={theme.spacing(0.1)} marginLeft={theme.spacing(0.1)}>
            <Link
              href="https://twitter.com/cowinhood"
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </Link>
          </Box>
          {" | "}
          <Box marginLeft={theme.spacing(0.1)}>
            Cowinhood {new Date().getFullYear()}
          </Box>
        </Box>
      </Box>
      {/* Site Footer END*/}
    </div>
  );
}

export default App;
