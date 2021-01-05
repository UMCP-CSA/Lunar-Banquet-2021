import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
    image: {
        width: theme.spacing(30),
        height: theme.spacing(30)
    }
}));

function MemberCard(props) {
    const classes = useStyles();

    return (
        <Container >
            <Grid container>
                
                <Grid item>
                    <img src={props.image} className = {classes.image} alt = ""/>    
                    <Typography varient="h5">{props.name}</Typography>
                    <Typography varient="h5">{props.bio}</Typography>
                </Grid>
                
            </Grid>


        </Container>
    );
}

export default MemberCard
