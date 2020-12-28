import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button
} from '@material-ui/core';
import CSALogo from '../../Assets/Images/CSALogo.svg';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../Firebase/FirebaseContext';


const useStyles = makeStyles(theme => ({
    logo: {
        paddingRight: theme.spacing(1),
        width: '3rem',
    },
    heading: {
        flexGrow: 1,
    }
}));

logout = () => {

}

function Navigation(props) {
    const classes = useStyles();

    return (
        <FirebaseContext.Consumer>
            <div>
                <AppBar>
                    <Toolbar>
                        <img src={CSALogo} className={classes.logo} alt='' />
                        <Typography align='left' variant='h6' color='secondary' className={classes.heading}>Lunar Banquet 2020</Typography>
                        <Button color='inherit' onClick={logout()}>Log Out</Button>
                        <Button color='inherit'><Link to="/login">Sign In</Link></Button>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>
        </FirebaseContext.Consumer>
    );
}

export default Navigation;