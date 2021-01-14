import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button,
    Modal,
    IconButton
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import { connect, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { logout } from '../../Redux/actions';
import InstagramIcon from '../../Assets/SocialIcons/InstagramIcon.svg';
import FacebookIcon from '../../Assets/SocialIcons/FacebookIcon.svg';
import store from '../../Redux/store';

const useStyles = makeStyles(theme => ({
    logo: {
        padding: theme.spacing(2),
        paddingRight: theme.spacing(3),
        width: '3rem',
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive"
    },
    links: {
        marginLeft: theme.spacing(5),
    },
    socials: {
        marginLeft: theme.spacing(0),
    },
    icons: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

function Navigation(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { auth } = store.getState();
    const { name } = store.getState();
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    // Dispatches logout state to the store and logs out the user in firebase
    const updateLogoutState = () => {
        firebase.auth().signOut()
            .then(status => {
                dispatch(logout());
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <a href='/'>
                        <img src={CSALogo} className={classes.logo} alt='' />
                    </a>
                    <Typography align='left' variant='h6' color='secondary' className={classes.heading} href='/'>
                        LUNAR BANQUET 2021
                    </Typography>
                    
                    <Typography color="secondary">
                        <IconButton href="https://www.instagram.com/umcpcsa/" target="_blank"className={classes.socials}><img src={InstagramIcon} className={classes.icons} alt='ig-icon' /></IconButton>
                        <IconButton href="https://www.facebook.com/UMCPCSA/" target="_blank" className={classes.socials}><img src={FacebookIcon} className={classes.icons} alt='fb-icon' /></IconButton>
                        
                        <Button href="/" className={classes.links} color="secondary">HOME</Button>
                        <Button href="/stream" className={classes.links} color="secondary">STREAM</Button>
                        <Button href="/shop" className={classes.links} color="secondary">SHOP</Button>
                        <Button href="/committee" className={classes.links} color="secondary">COMMITTEE</Button>
                        {auth ?
                            <>
                                <IconButton className={classes.links}><ShoppingCartIcon color="secondary" /></IconButton>
                                <Button disableRipple color="secondary" style={{cursor: 'default'}} className={classes.links}>{name}</Button>
                                <Button className={classes.links} onClick={updateLogoutState} color="secondary">LOGOUT</Button>
                            </>
                            :
                            <Button className={classes.links} color="secondary" onClick={toggleOpen}>LOGIN</Button> }
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

export default connect(mapStateToProps)(Navigation);