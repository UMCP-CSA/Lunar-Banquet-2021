import React from 'react';
import PayPal from './PayPal';
import { 
    Popover,
    List, 
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
import CartItem from '../Shop/CartItem';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({ 
    container: {
        width: theme.spacing(45),
        padding: theme.spacing(3),
    }
}));

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}


function Cart(props) {
    const classes = useStyles();

    const itemCount = 0;

    // Some sample data until the redux works
    const rows = [
        createData(itemCount, "name", "13.99"),
    ];

    function createData(itemCount, name, price) {
        itemCount++;
        return { itemCount, name, price };
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
                            {rows.map((row) => (
                                <TableRow>
                                    <TableCell align="right" size="small" colSpan={1}>{row.itemCount}</TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">${row.price}</TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">$10.99</TableCell>
                            </TableRow>
                        </TableBody>
                        
                    </Table>
                </TableContainer>

                <PayPal amount="35" />
                <Button>Paying on Venmo</Button>
            </Grid>
        </Popover>
    );
}

export default connect(mapStateToProps)(Cart);