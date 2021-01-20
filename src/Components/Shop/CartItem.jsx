import React from 'react';
import { Grid, ListItem, Typography } from '@material-ui/core';

function CartItem(props) {
    return (
        <ListItem>
            <Grid container direction="row" justify="space-between">
                <Grid item>{props.image}</Grid>
                <Grid item><Typography>{props.name}Item Name</Typography></Grid>
                <Grid item><Typography>${props.price}3.99</Typography></Grid>
            </Grid>
        </ListItem>
    );
}

export default CartItem;