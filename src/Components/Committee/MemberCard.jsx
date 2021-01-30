import React from "react";
import {
    makeStyles,
    Typography,
    Grid,
    Container
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
    image: {
        borderRadius: '16px',
        width: theme.spacing(25),
        height: theme.spacing(25)
    },
    memName: {
        fontFamily: "'Open Sans'",
        fontWeight: '650',
        fontSize: '18px',
        color: theme.palette.secondary.main
    },
    position: {
        fontFamily: "'Open Sans'",
        color: theme.palette.secondary.main
    },
}));

function MemberCard(props) {
    const classes = useStyles();

    return (
        <Container >
            <Grid container>
                
                <Grid item>
                    <img src={props.image} className = {classes.image} alt = ""/>    
                    <Typography varient="h5" align="center" className={classes.memName}>{props.name}</Typography>
                    <Typography varient="h5" align="center" className={classes.position}>{props.bio}</Typography>
                </Grid>
            </Grid>


        </Container>
    );
}

export default MemberCard
