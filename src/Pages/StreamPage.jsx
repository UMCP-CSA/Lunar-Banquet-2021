import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import countdown from '../Utils/Stream/countdown';
import { Container, Grid, Typography, Button, Modal } from '@material-ui/core';
import ProgramPopup from '../Components/Activities/ProgramPopup';
import VideoPopup from '../Components/App/VideoPopup';

const useStyles = makeStyles((theme) => ({
    video: {
        margin: theme.spacing(5),
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b"
    }
}));

function ShopPage(props) {
    const classes = useStyles();

    const lunarDate = new Date("Feb 20, 2021 20:00:00");
    var time = countdown (null, lunarDate, ~(countdown.MONTHS | countdown.WEEKS | countdown.MILLISECONDS));

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const toggleOpen = () => {
        !open ? setOpen(true) : setOpen(false);
    }
    const toggleOpen2 = () => {
        !open2 ? setOpen2(true) : setOpen2(false);
    }

    if(Date.now() < lunarDate) {
        return (
            <Container>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h3" align="center" className={classes.heading}>
                            Lunar Banquet Will Be On February 20th, 2021
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.heading}>
                            {time.days} : {time.hours} : {time.minutes} : {time.seconds} until Lunar!
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3" align="center" className={classes.heading}>
                            <Button size="large" className={classes.heading} onClick={toggleOpen}>Program of Events</Button>
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
    } else {
        return (
            <Container>
                <Typography variant="h3" align="center" className={classes.heading}>
                    Lunar Banquet Has Started!
                </Typography>
                <Grid container direction="column" alignItems="center">
                    <Typography variant="h3" align="center" className={classes.heading}>
                        <Button size="large" className={classes.heading} onClick={toggleOpen2}>Program of Events</Button>
                    </Typography>
                    <Grid item>
                        <Typography variant="h3" className={classes.heading}>
                            <Button size="large" className={classes.heading} onClick={toggleOpen}>Join the Stream!</Button>
                        </Typography>
                    </Grid>
                </Grid>

                <Modal
                    open={open}
                    onClose={toggleOpen}
                    style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <VideoPopup />
                </Modal>

                <Modal
                    open={open2}
                    onClose={toggleOpen2}
                    style={{ outline: "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ProgramPopup />
                </Modal>
            </Container>
        );
    }
    
}

export default ShopPage;