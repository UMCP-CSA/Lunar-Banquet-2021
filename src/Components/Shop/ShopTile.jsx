import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container, Avatar, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    productPic: {
        width: theme.spacing(30),
        height: theme.spacing(30)
    }
}));

function ShopTile(props) {
    const classes = useStyles();

    return (
        // container for tile
        <Container>
            {/* make tile a button? */}
            <Button variant="contained" color={props.color} href={props.link}>
                <Grid container direction="column" alignItems="center">
                    { /* picture of item */ }
                    <Grid item>
                        <Avatar src={props.image} className={classes.productPic} />
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
                </Grid>
            </Button>
        </Container>
    );
}

export default ShopTile;