import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container, Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    productPic: {
        width: theme.spacing(30),
        height: theme.spacing(30)
    },
    image: {
        borderRadius: '50%',
        objectFit: 'cover'
    }
}));

function ShopTile(props) {
    const classes = useStyles();

    return (
        // container for tile
        <Container color="secondary">
            <Button variant="contained" color="secondary" href={props.link}>
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
                        <Typography variant="p">{props.price}</Typography>
                    </Grid>

                    { /* item description */ }
                    <Grid item>
                        <Typography variant="p">{props.desc}</Typography>
                    </Grid>

                    { /* add to cart button */ }
                    <Button variant="contained" color="primary" href={props.link}>
                        Add To Cart
                    </Button>
                </Grid>
            </Button>
        </Container>
    );
}

export default ShopTile;