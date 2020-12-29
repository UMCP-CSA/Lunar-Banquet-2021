import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button
} from '@material-ui/core';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';

const useStyles = makeStyles(theme => ({
    logo: {
        padding: theme.spacing(1),
        paddingRight: theme.spacing(3),
        width: '4rem',
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive"
    },
    links: {
        marginLeft: theme.spacing(5),
    }
}));

function Navigation(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='primary' className={classes.heading}>LUNAR BANQUET 2020</Typography>
                    {/* <Button color='inherit' onClick={logout()}>Log Out</Button> */}
                    <Typography color="secondary">
                        <Button href="/" className={classes.links}>HOME</Button>
                        <Button className={classes.links}>STREAM</Button>
                        <Button href="/shop" className={classes.links}>SHOP</Button>
                        <Button href="/committee" className={classes.links}>COMMITTEE</Button>
                        <Button href="/login" className={classes.links}>LOGIN</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default Navigation;