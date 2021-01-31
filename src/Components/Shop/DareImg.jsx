import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    dareimg: {
        width: theme.spacing(40)
    }
 }));

function DareImg(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid container direction="column" spacing={1}>
                <Grid item><img className={classes.dareimg} src={props.img} /></Grid>
                <Grid item><Typography color="secondary" variant="h6">{props.name}</Typography></Grid>
            </Grid>
        </div>
    );
}

export default DareImg;