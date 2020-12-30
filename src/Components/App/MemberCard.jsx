import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    // container: {
    //     backgroundColor: "#ffffff"
    // }  
}));



function MemberCard(props) {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                
                <Grid item xs={3}>
                    <img src={props.image1} className="img-fluid" width="250" height="250" />    
                    <Typography varient="h5">{props.name1}</Typography>
                    <Typography varient="h5">{props.bio1}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image2} className={classes.logo} width="250" height="250" />
                    <Typography varient="h5">{props.name2}</Typography>
                    <Typography varient="h5">{props.bio2}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image3} className={classes.logo} width="250" height="250" />
                    <Typography varient="h5">{props.name3}</Typography>
                    <Typography varient="h5">{props.bio3}</Typography>
                </Grid>

                <Grid item xs={3}>
                    <img src={props.image4} className={classes.logo} width="250" height="250" />
                    <Typography varient="h5">{props.name4}</Typography>
                    <Typography varient="h5">{props.bio4}</Typography>
                </Grid>
                
            </Grid>


        </Container>
    );
}

export default MemberCard
