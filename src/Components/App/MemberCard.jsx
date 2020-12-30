import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({ 
    image: {
        width: theme.spacing(40),
        height: theme.spacing(40)
    }
}));



function MemberCard(props) {
    const classes = useStyles();

    return (
        <Container >
            <Grid container spacing={3}>
                
                <Grid item xs={3}>
                    <img src={props.image1} className = {classes.image} />    
                    <Typography varient="h5">{props.name1}</Typography>
                    <Typography varient="h5">{props.bio1}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image2} className = {classes.image} />
                    <Typography varient="h5">{props.name2}</Typography>
                    <Typography varient="h5">{props.bio2}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image3} className = {classes.image} />
                    <Typography varient="h5">{props.name3}</Typography>
                    <Typography varient="h5">{props.bio3}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image4} className = {classes.image} />
                    <Typography varient="h5">{props.name4}</Typography>
                    <Typography varient="h5">{props.bio4}</Typography>
                </Grid>
                
            </Grid>


        </Container>
    );
}

export default MemberCard
