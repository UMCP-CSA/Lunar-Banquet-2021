import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button, InputAdornment, OutlinedInput } from "@material-ui/core";

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
        borderRadius: '5em',
        backgroundColor: '#d81212',
        color: "#ffff"
    },
    text: {
        color: '#8ec77d'
    }
}));

function ShopTile(props) {
    const classes = useStyles();
    const profit = props.profit;

    return (
        /* // container for tile */
        <Box className={classes.outerBox} width={300}>
            
            <Grid container direction="column" alignItems="center">
                { /* picture of item */ }
                <Grid item>
                    <img src={props.image} className={classes.image} alt={props.alt} />
                </Grid>

                { /* item name */ }
                <Grid item>
                    <Typography variant="h5">{props.name}</Typography>
                </Grid>

                { /* item price */ }
                <Grid item>
                    <Typography variant="h5">{props.price}</Typography>
                </Grid>

                { /* item description */}
                <Grid item>
                    <Typography variant="body2">{props.desc}</Typography>
                </Grid>

                { /* add to cart button */}
                
                <Grid item>
                    <OutlinedInput 
                    id="standard-basic" 
                    type="number"
                    label="Name Your Own Price" 
                    defaultValue="5" 
                    startAdornment={<InputAdornment position="start">$</InputAdornment>} 
                    />
                    <Button className={classes.button} variant="contained" href={props.link}>
                        Add To Cart
                    </Button>
                    <Button className={classes.button} variant="contained">
                        View Dares
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopTile;