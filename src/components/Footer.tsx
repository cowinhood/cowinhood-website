import Box from "@material-ui/core/Box";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useTheme } from "@material-ui/core/styles";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
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
  );
};

export default Footer;
