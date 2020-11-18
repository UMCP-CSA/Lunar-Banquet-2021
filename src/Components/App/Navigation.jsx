import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button
} from '@material-ui/core';
import CSALogo from '../../Assets/Images/CSALogo.svg';

const useStyles = makeStyles(theme => ({
    logo: {
        paddingRight: theme.spacing(1),
        width: '3rem',
    },
    heading: {
        flexGrow: 1,
    }
}));

function Navigation(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='secondary' className={classes.heading}>Lunar Banquet 2020</Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default Navigation;