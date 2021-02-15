import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShopTile from '../Components/Shop/ShopTile.jsx';
import Lily from '../Assets/OrgPics/Lily.jpg';
import Jen from '../Assets/OrgPics/Jen.jpg';
import AlexH from '../Assets/ShopPics/AlexH.jpg';
import Eugene from '../Assets/ShopPics/Eugene.png';
import { Grid, Container, Tabs, Tab, Paper, Button, ButtonGroup } from "@material-ui/core";
import { borders, sizing } from '@material-ui/system';
import DareImg from '../Components/Shop/DareImg';
import { Reveal, Tween } from 'react-gsap';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}    
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
   tab: {
       backgroundColor: 'transparent',
       fontWeight: '700',
       color: 'rgba(255, 187, 17, 1)'
   },
   dareimg: {
       width: theme.spacing(40)
   },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Reveal repeat trigger={<div />}>
        <Tween from={{ opacity: 0}} duration={1}>
            <div className={classes.root}>
              
                  <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="secondary"
                      variant="fullWidth"
                      
                  >
                      <Tab label="Buy Dares" {...a11yProps(0)} classes={{root: classes.tab}} />
                      <Tab label="Completed Dares" {...a11yProps(1)} classes={{root: classes.tab}} />
                  </ Tabs>
                  

              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                <Container>
                    <Grid container direction="row" justify="center" spacing={2}>
                        <Grid item xs={12}>
                            <Box bgcolor="white" borderRadius={16} height="110%">
                                All proceeds go to Feeding America, the nation’s largest domestic hunger-relief organization. Their
                                mission is to feed America’s hungry through a nationwide network of member food banks and engage 
                                our country in the fight to end hunger. The Feeding America network of food banks, pantries and 
                                meal programs serve virtually every community in the United States, totalling around 40 million people.
                            </Box>
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Lily"
                                profit="0"
                                desc="Yummy"
                                image={Lily}
                                alt="lily"
                                person="lily"
                            />
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Eugene"
                                profit="0"
                                desc="dare me for thicc red pocket"
                                image={Eugene}
                                alt="Astro Baby Milo"
                                person="eugene"
                            />
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Jen"
                                profit="0"
                                desc="Easy cop"
                                image={Jen}
                                alt="Supreme bag"
                                person="jen"
                            />
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Lil Alex"
                                profit="0"
                                desc="The things I do for CSA"
                                image={AlexH}
                                alt="lil alex"
                                person="alexh"
                            />
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Big Alex"
                                profit="0"
                                desc="Must have"
                                image={Jen}
                                alt="big alex"
                                person="alexc"
                            />
                        </Grid>
                        <Grid item>
                            <ShopTile
                                name="Sylvia"
                                profit="0"
                                desc="Must have"
                                image={Jen}
                                alt="sylvia"
                                person="sylvia"
                            />
                        </Grid>
                    </Grid>
                </Container>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Grid container direction="row" spacing={2}>
                      <Grid item><DareImg img={AlexH} name="Lil Alex" /></Grid>
                  </Grid>
                </TabPanel>

              </SwipeableViews>
            </div>
        </Tween>
    </Reveal>
  );
}
