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
import DareImg from '../Components/Shop/DareImg';
import Alert from '@material-ui/lab/Alert';

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
   }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [error, setError] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleError = () => {
    setError(!error);
  }

  return (
    <div className={classes.root}>
          {error ? <Alert onClose={handleError} severity="error">Please name a price greater than 0!</Alert> : null }
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
                <Grid item>
                    <ShopTile
                        name="Lily"
                        profit="0"
                        desc="Yummy"
                        image={Lily}
                        alt="lily"
                        person="lily"
                        errorFunc={handleError}
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
                        errorFunc={handleError}
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
                        errorFunc={handleError}
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
                        errorFunc={handleError}
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
                        errorFunc={handleError}
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
                        errorFunc={handleError}
                    />
                </Grid>
            </Grid>
        </Container>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container>
              <Grid item><DareImg img={AlexH} name="Lil Alex" /></Grid>
          </Grid>
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}
