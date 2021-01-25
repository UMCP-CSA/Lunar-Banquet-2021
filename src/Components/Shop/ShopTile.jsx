import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button, InputAdornment, TextField, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    outerBox: {
        borderRadius: '16px',
        backgroundColor: '#ffff',
        padding: theme.spacing(2)
    },
    image: {
        width: theme.spacing(20),
        objectFit: 'cover',
    },
    button: {
        borderRadius: '20px'
    }
}));

function ShopTile(props) {
    const classes = useStyles();
    const profit = props.profit;
    const theme = useTheme();
    return (
        /* // container for tile */
        <Box className={classes.outerBox} width={300}>
            <Grid container direction="column" alignItems="center" spacing={0.5}>
                { /* picture of item */ }
                <Grid item>
                    <img src={props.image} className={classes.image} alt={props.alt} />
                </Grid>

                { /* item name */ }
                <Grid item>
                    <Typography variant="h5">{props.name}</Typography>
                </Grid>

                { /* item description */}
                <Grid item>
                    <Typography variant="body2">{props.desc}</Typography>
                </Grid>
                {/* profit bar */}
                <Grid item>
                    <LinearProgress color="primary" variant="determinate" value="100" />
                </Grid>

                { /* buttons */}
                <Grid item>
                    <TextField 
                    type="number"
                    defaultValue="5" 
                    variant="outlined"
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    style={{padding: theme.spacing(1)}}
                    />
                    <Grid container spacing={1}>
                        <Grid item><Button className={classes.button} color="secondary" variant="contained">View Dares</Button></Grid>
                        <Grid item><Button className={classes.button} color="primary" variant="contained" href={props.link}> Add To Cart</Button></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopTile;