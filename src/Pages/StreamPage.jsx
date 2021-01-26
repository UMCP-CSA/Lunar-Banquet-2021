import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button, Modal } from '@material-ui/core';
import '../Components/App/countdown';
import countdown from '../Components/App/countdown';
import ProgramPopup from '../Components/App/ProgramPopup';
import 'react-hide-on-scroll';
import { HideOn } from 'react-hide-on-scroll';

const useStyles = makeStyles((theme) => ({
    video: {
        flexGrow: 1,
        position: "absolute",
        // 0px-599px
        [theme.breakpoints.up('xs')]: {
            width: "60%",
            height: "200px",
            marginTop: theme.spacing(20),
            marginRight: theme.spacing(50),
            marginLeft: theme.spacing(0),
        },
        // 600px-959px
        [theme.breakpoints.up('sm')]: {
            width: "140%",
            height: "400px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(20),
            marginLeft: theme.spacing(1),
        },
        // 960px-1279px
        [theme.breakpoints.up('md')]: {
            width: "100%",
            height: "450px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(20),
            marginLeft: theme.spacing(0),
        },
        // 1280px-1919px
        [theme.breakpoints.up('lg')]: {
            width: "180%",
            height: "650px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(38),
            marginLeft: theme.spacing(0),
        },
        // 1920px+
        [theme.breakpoints.up('xl')]: {
            width: "225%",
            height: "1080px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(50),
            marginLeft: theme.spacing(0),
        },
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        textAlign: "center",
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(1),
        },
    },
    countdown: {
        flexGrow: 1,
        fontSize: "64px",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(1),
        textAlign: "center",
    },
    program: {
        flexGrow: 1,
        fontSize: "28px",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
        textAlign: "center",
    },
    list: {
        flexGrow: 1,
        fontSize: "24px",
        [theme.breakpoints.up('xs')]: {
            display: "block", 
            padding: "10px",
        },
        [theme.breakpoints.up('sm')]: {
            display: "block",
            padding: "10px",
        },
        [theme.breakpoints.up("md")]: {
            display: "inline-block",
            padding: "10px",
        },
    }
}));

function StreamPage(props) {
    const classes = useStyles();

    const lunarDate = new Date("Feb 20, 2021 19:00:00");
    var time = countdown (null, lunarDate, ~(countdown.MONTHS | countdown.WEEKS | countdown.MILLISECONDS));

    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }

    // current date before lunar
    if (Date.now() < lunarDate) {
        return (
                <Container>
                    <Grid container direction="column" alignItems="center">
                        <Grid item>
                            <Typography variant="h3" align="center" className={classes.heading}>
                                Lunar Banquet Will Be On February 20th, 2021<br /><br />
                                Countdown to Lunar:
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" align="center" color="secondary" className={classes.countdown}>
                                {/* unordered list without bullets */}
                                <ul style={{listStyle: "none outside none"}}>
                                    <li className={classes.list}>
                                        <div className={classes.countdown}>{time.days}</div>
                                        days
                                    </li>
                                    <li className={classes.list}>
                                        <div className={classes.countdown}>{time.hours}</div>
                                        hours
                                    </li>
                                    <li className={classes.list}>
                                        <div className={classes.countdown}>{time.minutes}</div>
                                        minutes
                                    </li>
                                    <li className={classes.list}>
                                        <div className={classes.countdown}>{time.seconds}</div>
                                        seconds
                                    </li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3" align="center" className={classes.program}>
                                <Button size="large" className={classes.program} onClick={toggleOpen}>Program of Events</Button>
                            </Typography>
                        </Grid>
                    </Grid>

                    <Modal
                        open={open}
                        onClose={toggleOpen}
                        style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <ProgramPopup />
                    </Modal>
                </Container>
        );
    // lunar has started, show stream
    } else {
        return (
            <Container>
                <Grid container direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                        <iframe
                            className={classes.video}
                            title="lunar stream"
                            src="https://www.youtube.com/embed/zpD0k69QwRU"
                            frameborder="0"
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </Grid>
                </Grid>
            </Container>
        );
    }
    
}

export default StreamPage;