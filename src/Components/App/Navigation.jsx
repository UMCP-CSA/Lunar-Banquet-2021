import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button,
    Modal,
    IconButton,
    Hidden,
    Drawer,
    Paper,
} from '@material-ui/core';
<<<<<<< HEAD
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
=======
import { ShoppingCart, Home, VideoLabel, Shop, People, Menu } from '@material-ui/icons';
>>>>>>> 471050d4f70c6a1c8bd99f28794d8038981d490f
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import Cart from '../Shop/Cart';
import { connect, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { logout } from '../../Redux/actions';
import InstagramIcon from '../../Assets/SocialIcons/InstagramIcon.svg';
import FacebookIcon from '../../Assets/SocialIcons/FacebookIcon.svg';
import store from '../../Redux/store';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 270;

const drawerWidth = 240;

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
        [theme.breakpoints.up("md")]: {
            marginLeft: "0",
        },
        [theme.breakpoints.up("lg")]: {
            marginLeft: theme.spacing(2),
        },
        [theme.breakpoints.up("xl")]: {
            marginLeft: theme.spacing(6),
        }

    },
    drawerPaper: {
        width: drawerWidth
    },
    socials: {
        marginLeft: theme.spacing(0),
    },
    icons: {
<<<<<<< HEAD
        width: 30,
        height: 30,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
=======
        width: theme.spacing(3),
        height: theme.spacing(3),
>>>>>>> 471050d4f70c6a1c8bd99f28794d8038981d490f
    },
}));

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

function Navigation(props) {
    const { window } = props;
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();

    const { auth } = store.getState();
    const { name } = store.getState();
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [cart, setCart] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const toggleLoginOpen = () => {
        !loginOpen ? setLoginOpen(true) : setLoginOpen(false);
    }

    const toggleCart = (event) => {
        !cart ? setCart(event.currentTarget) : setCart(null);
    }

    const toggleMobileOpen = () => {
        setMobileOpen(!mobileOpen);
    }

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Dispatches logout state to the store and logs out the user in firebase
    const updateLogoutState = () => {
        firebase.auth().signOut()
            .then(status => {
                dispatch(logout());
            })
            .catch(error => console.log(error));
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Instagram', 'Facebook'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Home', 'Stream', 'Shop', 'Committee', 'Login'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
<<<<<<< HEAD
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='primary' className={classes.heading}>LUNAR BANQUET 2020</Typography>
                    <Typography color="secondary">
                        <IconButton href="https://www.instagram.com/umcpcsa/" className={classes.socials}><img src={InstagramIcon} className={classes.icons} alt='ig-icon' /></IconButton>
                        <IconButton href="https://www.facebook.com/UMCPCSA/" className={classes.socials}><img src={FacebookIcon} className={classes.icons} alt='fb-icon' /></IconButton>

                        <Button href="/" className={classes.links}>HOME</Button>
                        <Button href="/stream" className={classes.links}>STREAM</Button>
                        <Button href="/shop" className={classes.links}>SHOP</Button>
                        <Button href="/committee" className={classes.links}>COMMITTEE</Button>
                        {auth ? <Button className={classes.links} onClick={updateLogoutState}>LOGOUT</Button> :
                            <Button className={classes.links} onClick={toggleOpen}>LOGIN</Button>}
=======
                    <Hidden xsDown>
                        <a href='/'>
                            <img src={CSALogo} className={classes.logo} alt='' />
                        </a>
                        <Typography align='left' variant='h6' color='secondary' className={classes.heading} href='/'>
                            LUNAR BANQUET 2021
>>>>>>> 471050d4f70c6a1c8bd99f28794d8038981d490f
                    </Typography>

                        <Typography color="secondary">
                            {/* Social Medias */}
                            <IconButton href="https://www.instagram.com/umcpcsa/" target="_blank" className={classes.socials}><img src={InstagramIcon} className={classes.icons} alt='ig-icon' /></IconButton>
                            <IconButton href="https://www.facebook.com/UMCPCSA/" target="_blank" className={classes.socials}><img src={FacebookIcon} className={classes.icons} alt='fb-icon' /></IconButton>

                            {/* Links */}
                            <Button size="large" href="/" className={classes.links} color="secondary">HOME</Button>
                            <Button size="large" href="/stream" className={classes.links} color="secondary">STREAM</Button>
                            <Button size="large" href="/shop" className={classes.links} color="secondary">SHOP</Button>
                            <Button size="large" href="/committee" className={classes.links} color="secondary">COMMITTEE</Button>
                            {auth ?
                                <>
                                    <IconButton id="cart-button" className={classes.links} onClick={toggleCart}><ShoppingCart color="secondary" /></IconButton>
                                    <Cart open={cart} onClose={toggleCart} anchorEl={document.getElementById("cart-button")} />
                                    <Button disableRipple color="secondary" style={{ cursor: 'default' }} className={classes.links}>{name}</Button>
                                    <Button className={classes.links} onClick={updateLogoutState} color="secondary">LOGOUT</Button>
                                </>
                                :
                                <Button className={classes.links} color="secondary" onClick={toggleLoginOpen}>LOGIN</Button>}
                        </Typography>
                    </Hidden>

                    {/* Mobile Nav */}
                    <Hidden smUp>
                        <IconButton onClick={toggleMobileOpen}><Menu color="secondary" /></IconButton>
                        <Drawer
                            open={mobileOpen}
                            onClose={toggleMobileOpen}
                            variant="temporary"
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}>
                            <Paper>Hihi Nick, help me fill things in here!</Paper>
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Toolbar />

<<<<<<< HEAD
            <nav className={classes.drawer} aria-label="side links">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true
                        }}
                    >
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                    </Drawer>
                </Hidden>
            </nav>

            <Modal
                open={open}
                onClose={toggleOpen}
                style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LoginPopup />
            </Modal>
        </div>
=======
                <Modal
                    open={loginOpen}
                    onClose={toggleLoginOpen}
                    style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <LoginPopup />
                </Modal>
        </>
>>>>>>> 471050d4f70c6a1c8bd99f28794d8038981d490f
    );
}

export default connect(mapStateToProps)(Navigation);