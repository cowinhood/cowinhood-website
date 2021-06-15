import Box from "@material-ui/core/Box";
import { HeaderText } from "../text";
import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.png";
import { useTheme } from "@material-ui/core/styles";

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box marginRight={theme.spacing(0.2)}>
        <img height="50px" width="50px" src={logo} alt="Cowinhood logo" />
      </Box>
      <Typography variant="h4" color="textSecondary">
        {HeaderText}
      </Typography>
    </>
  );
};

export default Header;
