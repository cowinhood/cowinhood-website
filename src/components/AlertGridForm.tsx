import { AgeGroup, TelegramAlerts } from "../text";
import {
  CardActionArea,
  GridList,
  GridListTile,
  Theme,
} from "@material-ui/core";
import React, { useState } from "react";
import { createStyles, useTheme } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TelegramIcon from "@material-ui/icons/Telegram";
import Typography from "@material-ui/core/Typography";
import data from "../data";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0.5),
    },
  })
);

interface SelectedGroup {
  name: string;
  chat_id: string;
  channel_name: string;
}

const AlertForm: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedGroup, setSelectedGroup] = useState<SelectedGroup>(data[0]);

  return (
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
      <Box marginBottom={theme.spacing(0.25)}>
        <Typography variant="h5">{TelegramAlerts}</Typography>
        <Typography variant="caption">{AgeGroup}</Typography>
      </Box>
      <Box>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.open(`https://t.me/${selectedGroup.chat_id}`, "_blank"); //to open new page
          }}
        >
          <GridList cellHeight={80} cols={4}>
            {data.map(({ chat_id, channel_name, name, icon }) => (
              <GridListTile key={chat_id} cols={1}>
                <CardActionArea
                  onClick={() =>
                    setSelectedGroup({ name, channel_name, chat_id })
                  }
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    borderRadius={theme.shape.borderRadius}
                  >
                    <img src={icon} height="45px" alt={name} />
                    <Typography variant="caption">{name}</Typography>
                  </Box>
                </CardActionArea>
              </GridListTile>
            ))}
          </GridList>
          <Box marginBottom={theme.spacing(0.25)}></Box>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<TelegramIcon />}
            disabled={!selectedGroup.channel_name}
            type="submit"
          >
            {selectedGroup.channel_name}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AlertForm;
