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
    },
    socials: {
        marginLeft: theme.spacing(0),
    },
    icons: {
        width:30,
        height:30,
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
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='primary' className={classes.heading}>LUNAR BANQUET 2020</Typography>
                    <Typography color="secondary">
                        <IconButton href="https://www.instagram.com/umcpcsa/" className={classes.socials}><img src={InstagramIcon} className={classes.icons} alt='ig-icon' /></IconButton>
                        <IconButton href="https://www.facebook.com/UMCPCSA/" className={classes.socials}><img src={FacebookIcon} className={classes.icons} alt='fb-icon' /></IconButton>
                        
                        <Button href="/" className={classes.links}>HOME</Button>
                        <Button href="/stream" className={classes.links}>STREAM</Button>
                        <Button href="/shop" className={classes.links}>SHOP</Button>
                        <Button href="/committee" className={classes.links}>COMMITTEE</Button>
                        { auth ? <Button className={classes.links} onClick={updateLogoutState}>LOGOUT</Button> :
                        <Button className={classes.links} onClick={toggleOpen}>LOGIN</Button> }
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