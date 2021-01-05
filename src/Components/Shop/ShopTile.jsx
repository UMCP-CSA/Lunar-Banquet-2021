import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button, Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    box: {
        borderRadius: '16px',
    },
    productPic: {
        width: theme.spacing(30),
        height: theme.spacing(30)
    },
    image: {
        borderRadius: '50%',
        objectFit: 'cover'
    },
    button: {
        marginTop: '10%',
        marginBotton: '15%',
        borderRadius: '5em'
    }
}));

function ShopTile(props) {
    const classes = useStyles();

    return (
        <Badge badgeContent={props.stock} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            {/* // container for tile */}
            <Box className={classes.box} bgcolor="secondary.main">
                    <Grid container direction="column" alignItems="center">
                        { /* picture of item */ }
                        <Grid item>
                            <img src={props.image} className={classes.image} alt={props.alt} width="300" height="300"/>
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
                            <Button className={classes.button} variant="contained" color="primary" href={props.link}>
                                Add To Cart
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        </Badge>
    );
}

export default ShopTile;