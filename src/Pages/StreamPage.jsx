import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import countdown from '../Utils/Stream/countdown';
import { Container, Grid, Typography, Button, Modal } from '@material-ui/core';
<<<<<<< HEAD
import '../Components/App/countdown';
import ProgramPopup from '../Components/App/ProgramPopup';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
=======
import ProgramPopup from '../Components/Activities/ProgramPopup';
>>>>>>> 55c7affdf3a33b3a309f1b7ea04937ce847f37e8

const useStyles = makeStyles((theme) => ({
    video: {
        position: 'absolute',
        flexGrow: 1,
        left: '50%', 
        top: '50%',
        // 0px-599px
        [theme.breakpoints.up('xs')]: {
            transform: 'translate(-50%, 150%)',
            width: theme.spacing(2) * 16,
            height: theme.spacing(2) * 9,
        },
        // 600px-959px
        [theme.breakpoints.up('sm')]: {
            transform: 'translate(-50%, 80%)',
            width: theme.spacing(4) * 16,
            height: theme.spacing(4) * 9,
        },
        // 960px-1279px
        [theme.breakpoints.up('md')]: {
            transform: 'translate(-50%, 50%)',
            width: theme.spacing(5) * 16,
            height: theme.spacing(5) * 9,
        },
        // 1280px-1919px
        [theme.breakpoints.up('lg')]: {
            transform: 'translate(-50%, 20%)',
            width: theme.spacing(9) * 16,
            height: theme.spacing(9) * 9,
        },
        // 1920px+
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(14) * 16,
            height: theme.spacing(14) * 9,
        },
    },
    vidWrapper: {
        position: 'relative',
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        textAlign: "center",
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(25),
            marginBottom: theme.spacing(1),
            fontSize: "24px",
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(1),
            fontSize: "24px",
        },
    },
    countdown: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(25),
            marginBottom: theme.spacing(1),
            fontSize: "24px",
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(1),
            fontSize: "24px",
        },
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(1),
            fontSize: "56px",
        }
    },
    program: {
        flexGrow: 1,
        fontSize: "36px",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
        textAlign: "center",
    },
    list: {
        flexGrow: 1,
        fontSize: "28px",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        textAlign: "center",
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

    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }
    // Stream to be shown on completion of countdown
    const Completionist = () => <Container>
                                    <div className={classes.vidWrapper}>
                                        {/* 16:9 ratio by default */}
                                        <iframe className={classes.video}
                                            src="https://www.youtube.com/embed/zpD0k69QwRU"
                                            title="lunar-stream"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; 
                                            encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                </Container>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render stream if completed
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <div>
                    {/* unordered list without bullets */}
                    <ul style={{ listStyle: "none outside none" }}>
                        <li className={classes.list}>
                            <div className={classes.countdown}>{days}</div>
                            days
                        </li>
                        <li className={classes.list}>
                            <div className={classes.countdown}>{hours}</div>
                            hours
                        </li>
                        <li className={classes.list}>
                            <div className={classes.countdown}>{minutes}</div>
                            minutes
                        </li>
                        <li className={classes.list}>
                            <div className={classes.countdown}>{seconds}</div>
                            seconds
                        </li>
                    </ul>
                </div>
            );
        }
    };

    // if current date before lunar
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
                        <Countdown
                            date={"February 20,2021"}
                            intervalDelay={1000}
                            precision={1}
                            zeroPadDays={2}
                            zeroPadTime={2}
                            renderer={renderer}
                        />
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
        return (<Completionist />);
    }
}

export default StreamPage;