import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
} from "@material-ui/core";
import {
  DescriptionHeading,
  DescriptionText1,
  DescriptionText2,
  DescriptionText3,
  DescriptionText4,
  DescriptionText5,
  MoreInfo,
  twitterText,
} from "../text";

import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import Typography from "@material-ui/core/Typography";
import demo3 from "../assets/images/demo3.gif";
import { twitterLink } from "../constants";
import { useTheme } from "@material-ui/core/styles";

const Description: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        {DescriptionHeading}
      </Typography>
      <Box marginBottom={theme.spacing(0.2)}>
        <img src={demo3} alt="Cowinhood Demo 3" height="400px" />
      </Box>
      <Box marginBottom={theme.spacing(0.2)} maxWidth="400px">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">{MoreInfo}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Box marginBottom={theme.spacing(0.1)}>
                <Typography variant="subtitle1" align="left">
                  {DescriptionText1}
                </Typography>
              </Box>
              <Box marginBottom={theme.spacing(0.1)}>
                <Typography variant="subtitle1" align="left">
                  {DescriptionText2}
                </Typography>
              </Box>
              <Box marginBottom={theme.spacing(0.1)}>
                <Typography variant="subtitle1" align="left">
                  {DescriptionText3}
                </Typography>
              </Box>
              <Box marginBottom={theme.spacing(0.1)}>
                <Typography variant="subtitle1" align="left">
                  {DescriptionText4}{" "}
                  <Link
                    href={twitterLink}
                    color="primary"
                    target="_blank"
                    rel="noopener"
                    style={{ color: theme.palette.primary.dark }}
                  >
                    {twitterText}{" "}
                  </Link>
                  {DescriptionText5}
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Description;
