import React, { useLayoutEffect } from 'react';
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
    useTheme,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Menu,
    MenuItem,
} from '@material-ui/core';

import { ShoppingCart, QuestionAnswer } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CSALogo from '../../Assets/OrgPics/CSALogo.svg';
import LoginPopup from '../Auth/LoginPopup';
import Cart from '../Shop/Cart';
import { connect, useDispatch } from 'react-redux';
import firebase from 'firebase';
import InstagramSocial from '../../Assets/SocialIcons/InstagramIcon.svg';
import FacebookSocial from '../../Assets/SocialIcons/FacebookIcon.svg';
import store from '../../Redux/store';
import { login, logout } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import '../../App.css'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    logo: {
        padding: theme.spacing(1),
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
        backgroundColor: theme.palette.primary.main,
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
    divider: {
        background: theme.palette.secondary.main
    },
    logoDrawer: {
        paddingRight: theme.spacing(3),
        width: '2rem',
    },
    menu: {
        background: theme.palette.secondary.main,
    }
}));

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) dispatch(login(user.displayName));
            else dispatch(logout());
        });
    }, [dispatch]);

    const { auth } = store.getState();
    const { name } = store.getState();
    const [loginOpen, setLoginOpen] = React.useState(false);
    const [cart, setCart] = React.useState(false);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [menu, setMenu] = React.useState(null);

    const toggleLoginOpen = () => {
        !loginOpen ? setLoginOpen(true) : setLoginOpen(false);
    }

    const toggleCart = (event) => {
        !cart ? setCart(event.currentTarget) : setCart(null);
    }

    const toggleMobileOpen = () => {
        setMobileOpen(!mobileOpen);
    }

    const toggleMenu = (e) => {
        menu ? setMenu(null) : setMenu(e.currentTarget)
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
        <div style={{ marginBottom: theme.spacing(5) }} >
            <AppBar color="primary" elevation="4">
                <Toolbar>
                    <Hidden xsDown>
                        <a href='/'>
                            <img src={CSALogo} className={classes.logo} alt='' />
                        </a>
                        <Typography align='left' variant='h6' color='secondary' className={classes.heading} href='/'>
                            <Link to="/" style={{textDecoration: "none", color: "inherit"}}>LUNAR BANQUET 2021</Link>
                    </Typography>

                        <Typography color="secondary">
                            {/* Social Medias */}
                            <IconButton href="https://www.instagram.com/umcpcsa/" target="_blank" className={classes.socials}><img src={InstagramSocial} className={classes.icons} alt='ig-icon' /></IconButton>
                            <IconButton href="https://www.facebook.com/UMCPCSA/" target="_blank" className={classes.socials}><img src={FacebookSocial} className={classes.icons} alt='fb-icon' /></IconButton>

                            {/* Links */}
                            <Link to="/"><Button size="large" className={classes.links} color="secondary">HOME</Button></Link>
                            <Button size="large" onClick={(e) => toggleMenu(e)} className={classes.links} color="secondary">ACTIVITIES</Button>
        
                            <Menu open={Boolean(menu)} anchorEl={menu} onClose={(e) => toggleMenu(e)} classes={{ paper: classes.menu }}>
                                <a style={{color: "#000"}} target="_blank" rel="noreferrer" href="http://ter.ps/csazoom"><MenuItem>Pre-Activities / Hangout on Zoom</MenuItem></a>
                                <a style={{color: "#000"}} target="_blank" rel="noreferrer" href="http://twitch.tv/umcpcsa"><MenuItem>Lunar Stream on Twitch</MenuItem></a>
                            </Menu>

                            <Link to="/dares"><Button size="large" className={classes.links} color="secondary">DARES</Button></Link>
                            <Link to="/faq"><Button size="large" className={classes.links} color="secondary">INFO</Button></Link>
                            <Link to="/committee"><Button size="large" className={classes.links} color="secondary">COMMITTEE</Button></Link>
                            <IconButton id="cart-button" className={classes.links} onClick={toggleCart}><ShoppingCart color="secondary" /></IconButton>
                            <Cart open={cart} onClose={toggleCart} anchorEl={document.getElementById("cart-button")} />
                            {auth ?
                                <>
                                    <Button disableRipple color="secondary" style={{ cursor: 'default' }} className={classes.links}>{name}</Button>
                                    <Button className={classes.links} onClick={updateLogoutState} color="secondary">LOGOUT</Button>
                                </>
                                :
                                <Button className={classes.links} color="secondary" onClick={toggleLoginOpen}>LOGIN</Button>}
                        </Typography>
                    </Hidden>

                    {/* Mobile Nav */}
                    <Hidden smUp>
                        <IconButton onClick={toggleMobileOpen}><MenuIcon color="secondary" /></IconButton>
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
                                    {/* <Divider className={classes.divider}/> */}
                                    <List>
                                        <ListItem>
                                            <a href='/'>
                                                <img src={CSALogo} className={classes.logoDrawer} alt='' />
                                            </a>
                                            <Typography align='left' variant='subtitle2' color='secondary' className={classes.heading}>
                                                LUNAR BANQUET
                                            </Typography>
                                        </ListItem>
                                    </List>
                                    <Divider className={classes.divider} />
                                    <List>
                                        <ListItem button key="Home" component="a" href="/">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="HOME" />
                                        </ListItem>
                                        <ListItem button key="Zoom" component="a" href="http://ter.ps/csazoom" target="_blank">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <SupervisorAccountIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="ZOOM HANGOUT" />
                                        </ListItem>
                                        <ListItem button key="Stream" component="a" href="http://twitch.tv/umcpcsa" target="_blank">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <LiveTvIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="LUNAR STREAM" />
                                        </ListItem>
                                        <ListItem button key="Dares" component="a" href="/dares">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <WhatshotIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="DARES" />
                                        </ListItem>
                                        <ListItem button key="INFO" component="a" href="/faq">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <QuestionAnswer />
                                            </ListItemIcon>
                                            <ListItemText primary="INFO" />
                                        </ListItem>
                                        <ListItem button key="Committee" component="a" href="/committee">
                                            <ListItemIcon className={classes.drawerIcons}>
                                                <PeopleIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="COMMITTEE" />
                                        </ListItem>
                                    </List>
                                    <Divider className={classes.divider} />
                                    <List>
                                        {auth ?
                                            <ListItem button key="LOGOUT" onClick={updateLogoutState}>
                                                <ListItemIcon className={classes.drawerIcons}>
                                                    <MeetingRoomIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="LOGOUT" />
                                            </ListItem>
                                            :
                                            <ListItem button onClick={toggleLoginOpen} key="Login">
                                                <ListItemIcon className={classes.drawerIcons}>
                                                    <ExitToAppIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="LOGIN" />
                                            </ListItem>
                                        }
                                    </List>
                                    <Divider className={classes.divider} />
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
                                </div>
                            </Paper>
                        </Drawer>
                        <Box display="flex" flexGrow={1}>
                        </Box>

                        <IconButton id="cart-button" className={classes.links} onClick={toggleCart}><ShoppingCart color="secondary" /></IconButton>
                        <Cart open={cart} onClose={toggleCart} anchorEl={document.getElementById("cart-button")} />

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
        </div>
    );
}

export default connect(mapStateToProps)(Navigation);