import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button,
    Modal
} from '@material-ui/core';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import { Link } from '@material-ui/core';

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

    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    return (
        <div>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <img src={CSALogo} className={classes.logo} alt='' href='/' />
                    <Typography align='left' variant='h6' color='primary' className={classes.heading} href='/'>
                        LUNAR BANQUET 2020
                    </Typography>
                    
                    {/* <Button color='inherit' onClick={logout()}>Log Out</Button> */}
                    <Typography color="secondary">
                        <Button href="/" className={classes.links}>HOME</Button>
                        <Button href="/stream" className={classes.links}>STREAM</Button>
                        <Button href="/shop" className={classes.links}>SHOP</Button>
                        <Button href="/committee" className={classes.links}>COMMITTEE</Button>
                        <Button className={classes.links} onClick={toggleOpen}>LOGIN</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Modal
                open={open}
                onClose={toggleOpen}
                style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LoginPopup />
            </Modal>
            
        </div>
    );
}

export default Navigation;