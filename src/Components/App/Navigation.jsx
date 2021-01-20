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
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import Cart from '../Shop/Cart';
import { connect, useDispatch } from 'react-redux';
import firebase from 'firebase';
import { logout } from '../../Redux/actions';
import InstagramSocial from '../../Assets/SocialIcons/InstagramIcon.svg';
import FacebookSocial from '../../Assets/SocialIcons/FacebookIcon.svg';
import store from '../../Redux/store';

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
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main
    },
    socials: {
        marginLeft: theme.spacing(0),
    },
    icons: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    topDrawer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    drawerIcons: {
        color: theme.palette.secondary.main
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

    // Dispatches logout state to the store and logs out the user in firebase
    const updateLogoutState = () => {
        firebase.auth().signOut()
            .then(status => {
                dispatch(logout());
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <Hidden xsDown>
                        <a href='/'>
                            <img src={CSALogo} className={classes.logo} alt='' />
                        </a>
                        <Typography align='left' variant='h6' color='secondary' className={classes.heading} href='/'>
                            LUNAR BANQUET 2021
                    </Typography>

                        <Typography color="secondary">
                            {/* Social Medias */}
                            <IconButton href="https://www.instagram.com/umcpcsa/" target="_blank" className={classes.socials}><img src={InstagramSocial} className={classes.icons} alt='ig-icon' /></IconButton>
                            <IconButton href="https://www.facebook.com/UMCPCSA/" target="_blank" className={classes.socials}><img src={FacebookSocial} className={classes.icons} alt='fb-icon' /></IconButton>

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
                            <Paper>
                                <div className={classes.topDrawer}>
                                    <div className={classes.toolbar} />
                                    <Divider />
                                    <List>
                                        <ListItem button key="Instagram" component="a" href="https://www.instagram.com/umcpcsa/" target="_blank">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <InstagramIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="INSTAGRAM" />
                                        </ListItem>
                                        <ListItem button key="Facebook" component="a" href="https://www.facebook.com/UMCPCSA/" target="_blank">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <FacebookIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="FACEBOOK" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List>
                                        <ListItem button key="Home" component="a" href="/">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="HOME" />
                                        </ListItem>
                                        <ListItem button key="Stream" component="a" href="/stream">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <PlayCircleFilledIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="STREAM" />
                                        </ListItem>
                                        <ListItem button key="Shop" component="a" href="/shop">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <StorefrontIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="SHOP" />
                                        </ListItem>
                                        <ListItem button key="Committee" component="a" href="/committee">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <PeopleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="COMMITTEE" />
                                        </ListItem>
                                        {auth ?
                                            [<ListItem id="cart-button" onClick={toggleCart} key="Name">
                                                <ListItemIcon className={classes.drawerIcons}>
                                                    <ShoppingCartIcon />
                                                    <Cart open={cart} onClose={toggleCart} anchorEl={document.getElementById("cart-button")} />
                                                </ListItemIcon>
                                                <ListItemText disableRipple style={{ cursor: 'default', textTransform: 'uppercase' }} primary={name} />
                                            </ListItem>,
                                            <ListItem button key="LOGOUT" onClick={updateLogoutState}>
                                                <ListItemIcon className={classes.drawerIcons}>
                                                    <MeetingRoomIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="LOGOUT" />
                                            </ListItem>]
                                            :
                                            <ListItem button onClick={toggleLoginOpen} key="Login">
                                                <ListItemIcon className={classes.drawerIcons}>
                                                    <ExitToAppIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="LOGIN" />
                                            </ListItem>
                                        }
                                    </List>
                                </div>
                            </Paper>
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Modal
                open={loginOpen}
                onClose={toggleLoginOpen}
                style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LoginPopup />
            </Modal>
        </>
    );
}

export default connect(mapStateToProps)(Navigation);