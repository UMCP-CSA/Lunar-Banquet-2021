import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Button, Modal } from '@material-ui/core';
import '../Components/App/countdown';
import countdown from '../Components/App/countdown';
import ProgramPopup from '../Components/App/ProgramPopup';

const useStyles = makeStyles((theme) => ({
    video: {
        // 0px-599px
        [theme.breakpoints.up('xs')]: {
            width: "100%",
            height: "300px",
            marginTop: theme.spacing(10),
            marginRight: theme.spacing(5),
            marginLeft: theme.spacing(5),
        },
        // 600px-959px
        [theme.breakpoints.up('sm')]: {
            width: "140%",
            height: "400px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(12),
            marginLeft: theme.spacing(1),
        },
        // 960px-1279px
        [theme.breakpoints.up('md')]: {
            width: "150%",
            height: "450px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(20),
        },
        // 1280px-1919px
        [theme.breakpoints.up('lg')]: {
            width: "180%",
            height: "600px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(20),
            marginLeft: theme.spacing(2),
        },
        // 1920px+
        [theme.breakpoints.up('xl')]: {
            width: "250%",
            height: "900px",
            marginTop: theme.spacing(5),
            marginRight: theme.spacing(20),
            marginLeft: theme.spacing(2),
        },
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(1),
    },
    countdown: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(2),
    },
    program: {
        flexGrow: 1,
        fontSize: "28px",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
        marginTop: theme.spacing(3),
    },
}));

function StreamPage(props) {
    const classes = useStyles();

    const lunarDate = new Date("Feb 20, 2021 19:00:00");
    var time = countdown (null, lunarDate, ~(countdown.MONTHS | countdown.WEEKS | countdown.MILLISECONDS));

    const [open, setOpen] = React.useState(false);
    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }
    // revert after testing stream size
    if (Date.now() < lunarDate) {
        return (
            <Container>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" align="center" className={classes.heading}>
                            Lunar Banquet Will Be On February 20th, 2021
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.countdown}>
                            {time.toString()} until Lunar!
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
                    <ProgramPopup className={classes.heading} />
                </Modal>
            </Container>
        );
    } else {
        return (
            <Container>
                <Grid container direction="column" alignItems="center">
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