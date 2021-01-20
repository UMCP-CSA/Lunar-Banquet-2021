import React from 'react';
import PayPalButton from '../Shop/PayPalButton';
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
                <Typography variant='h5' color="primary">Cart</Typography>
                <List>
                    <CartItem />
                </List>
               
                <Typography>Order Total: {props.total} $10.50</Typography>
                <PayPalButton amount="35" />
            </Grid>
        </Popover>
    );
}

export default Cart;