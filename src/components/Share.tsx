import { Box, useTheme } from "@material-ui/core";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import React from "react";
import Typography from "@material-ui/core/Typography";

const Share: React.FC = () => {
  const shareUrl = "http://cowinhood.org";
  const title = "Cowinhood - Telegram Alerts for vaccination slot booking";
  const theme = useTheme();

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="subtitle2" gutterBottom>
          Share this website
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box paddingRight={theme.spacing(0.2)}>
          <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </Box>
        <Box paddingRight={theme.spacing(0.2)}>
          <FacebookShareButton url={shareUrl} quote={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </Box>
        <Box paddingRight={theme.spacing(0.2)}>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </Box>
        <Box paddingRight={theme.spacing(0.2)}>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </Box>
        <Box paddingRight={theme.spacing(0.2)}>
          <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Share;
