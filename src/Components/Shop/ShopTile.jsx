import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    outerBox: {
        borderRadius: '16px',
        backgroundColor: theme.palette.primary.main
    },
    innerBox: {
        borderRadius: '0px 8px 0px 8px',
        backgroundColor: theme.palette.secondary.main,
        paddingTop: '1%'
    },
    image: {
        borderRadius: '50%',
        objectFit: 'cover',
        // marginTop:'-5%',
        marginBottom:'10%'
    },
    button: {
        marginTop: '10%',
        borderRadius: '5em'
    }
}));

function ShopTile(props) {
    const classes = useStyles();

    return (
        /* // container for tile */
        <Box className={classes.outerBox} width={300} height={400}>
            <Grid container direction="row" justify="flex-end">
                <Box className={classes.innerBox} width={100} height={20}>
                    <Typography variant="body2">{props.stock}</Typography>
                </Box>
            </Grid>
            <Grid container direction="column" alignItems="center">
                { /* picture of item */ }
                <Grid item>
                    <img src={props.image} className={classes.image} alt={props.alt} width="200" height="200"/>
                </Grid>

                { /* item name */ }
                <Grid item>
                    <Typography variant="h4">{props.name}</Typography>
                </Grid>

                { /* item price */ }
                <Grid item>
                    <Typography variant="h5">{props.price}</Typography>
                </Grid>

                { /* item description */ }
                <Grid item>
                    <Typography variant="body2">{props.desc}</Typography>
                </Grid>

                { /* add to cart button */ }
                <Grid item>
                    <Button className={classes.button} variant="contained" color="secondary" href={props.link}>
                        Add To Cart
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopTile;