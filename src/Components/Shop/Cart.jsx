import React, { useEffect } from 'react';
import PayPal from './PayPal';
import venmoQR from '../../Assets/ShopPics/csavenmo.png'
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
    Button,
    IconButton,
    Box,
    useTheme,
    } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { connect, useDispatch } from 'react-redux';
import store from '../../Redux/store';
import { recoverCart, removeItem } from '../../Redux/actions';

const useStyles = makeStyles((theme) => ({ 
    container: {
        width: theme.spacing(45),
        padding: theme.spacing(3),
    },
    payment: {
        margin: theme.spacing(3)
    },
    QR: {
        width: "50%"
    },
    venmo: {
        textAlign: "center"
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
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        const recoveredCart = localStorage.getItem('cart');
        if (recoveredCart) dispatch(recoverCart(JSON.parse(recoveredCart)));
    }, [dispatch])

    const handleDelete = (name) => {
        dispatch(removeItem(name));
    }

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
                <Box style = {{marginTop: theme.spacing(1)}}>
                    <TableContainer component={Paper}>
                        <Table aria-label="cart items table">
                            <TableHead>
                                <TableRow>
                                    <TableCell variant="footer" align="left">Name</TableCell>
                                    <TableCell variant="footer" align="right">Donation</TableCell>
                                    <TableCell variant="footer" align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cart.map((item) => (
                                    <TableRow>
                                        <TableCell align="left">{item.name}</TableCell>
                                        <TableCell align="right">${item.cost}</TableCell>
                                        <TableCell align="right" size="small"><IconButton onClick={() => handleDelete(item.name)}><Delete /></IconButton></TableCell>

                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">${total}</TableCell>
                                </TableRow>
                            </TableBody>
                            
                        </Table>
                    </TableContainer>
                </Box>

                <Box className={classes.payment}><PayPal amount={total}/></Box>
                <Grid className={classes.venmo}>
                <Typography align="center" variant="subtitle2">
                        You can also Venmo @CSA-UMCP and leave the person(s) you are contributing to in the notes!
                        </Typography>
                    <Grid item><img className={classes.QR} src={venmoQR} /></Grid>
                </Grid>
            </Grid>
        </Popover>
    );
}

export default connect(mapStateToProps)(Cart);