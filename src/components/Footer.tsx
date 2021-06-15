import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box marginRight={theme.spacing(0.1)}>
        <Link
          href="https://github.com/cowinhood"
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
      <Typography variant="caption">cowinhood.org {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
