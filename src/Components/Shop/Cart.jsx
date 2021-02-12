import React, { useEffect } from 'react';
import PayPal from './PayPal';
import { 
    Popover,
    makeStyles, 
    Typography, 
    Grid, 
    Table, 
    TableContainer, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableRow, 
    Paper,
    Button} from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import store from '../../Redux/store';
import { recoverCart, removeItem } from '../../Redux/actions';

const useStyles = makeStyles((theme) => ({ 
    container: {
        width: theme.spacing(45),
        padding: theme.spacing(3),
    }
}));

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

function Cart(props) {
    const classes = useStyles();
    const { cart, total } = store.getState();
    const dispatch = useDispatch();

    useEffect(() => {
        const recoveredCart = localStorage.getItem('cart');
        if (recoveredCart) dispatch(recoverCart(JSON.parse(recoveredCart)));
    }, [dispatch])

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
                <TableContainer component={Paper}>
                    <Table aria-label="cart items table">
                        <TableHead>
                            <TableRow>
                                <TableCell variant="footer">#</TableCell>
                                <TableCell variant="footer" align="right">Name</TableCell>
                                <TableCell variant="footer" align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((item) => (
                                <TableRow>
                                    <TableCell align="right" size="small" colSpan={1}>{}</TableCell>
                                    <TableCell align="right">{item.name}</TableCell>
                                    <TableCell align="right">${item.cost}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">${total}</TableCell>
                            </TableRow>
                        </TableBody>
                        
                    </Table>
                </TableContainer>

                <PayPal amount={total} />
                <Button>Paying on Venmo</Button>
            </Grid>
        </Popover>
    );
}

export default connect(mapStateToProps)(Cart);