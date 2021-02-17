import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles, Container } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  

function FAQPage(props) {
    const classes = useStyles();

    return (
        <Container style={{textAlign: "center"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How do dares work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Each board member has a list of dares. Once their donation meter meets a certain threshold, they will perform
                        the dare and post it on the 'Completed Dares' tab. You can name your own price for the donation, and all proceeds
                        will go to Feeding America.
                        <br /><br />
                        You can check the dares list for each member by clicking 'View Dares'! Your donation will work towards the next
                        tier dare for that member.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How do I pay by Venmo?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can go to the Venmo app and give @CSA-UMCP your desired donation. Leave the person(s) you want
                        to donate to as a note and we will count it towards their dare threshold!
                        <br /><br />
                        You do not need to use the cart on this website if paying by Venmo. :)
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>When does the stream start?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The live activities for Lunar Banquet will take place on Saturday, Feb. 20th at 6:30PM!
                        Our pre-lunar activities will take place on Zoom, and the rest of the show will be streamed on Twitch.
                        Optionally, you can stay on Zoom to discuss the show with each other!
          </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}

export default FAQPage;