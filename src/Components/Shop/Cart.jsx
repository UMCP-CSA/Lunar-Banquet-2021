import React from 'react';
import ReactDOM from "react-dom";
import { Popover, List, makeStyles, Typography, Grid } from '@material-ui/core';
import CartItem from '../Shop/CartItem';

const useStyles = makeStyles((theme) => ({ 
    container: {
        width: theme.spacing(45),
        padding: theme.spacing(3),
    }
}));

function Cart(props) {
    const classes = useStyles();
    const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });


    return (
        <Popover
            open={props.open}
            onClose={props.onClose}
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}>
            <Grid className={classes.container} component={Grid} alignItems="center" justify="center" >
                <Grid item> <Typography variant='h5' color="primary">Cart</Typography></Grid>
                <Grid item><List>
                    <CartItem />
                </List>
                </Grid>
                <Grid item><Typography>Order Total: {props.total} $10.50</Typography></Grid>
            </Grid>
        </Popover>
    );
}

export default Cart;