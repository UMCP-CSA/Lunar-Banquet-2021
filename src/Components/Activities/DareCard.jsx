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
        fontFamily: "'Open Sans', sans-serif",
        fontSize: '18px',
        fontWeight: 'bold',
        color: theme.palette.secondary.main
    },
    title: {
        fontFamily: "'Open Sans', sans-serif",
        color: theme.palette.secondary.main
    },
}));

function DareCard(props) {
    const classes = useStyles();

    return (
        <Container >
            <Grid container>
                
                <Grid item>
                    <div>{props.image}</div>
                    <Typography varient="h5" align="center" className={classes.memName}>{props.name}</Typography>
                    <Typography varient="h5" align="center" className={classes.title}>{props.bio}</Typography>
                </Grid>
            </Grid>


        </Container>
    );
}

export default DareCard
