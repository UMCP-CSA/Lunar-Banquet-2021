import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Grid, Button, InputAdornment, TextField, LinearProgress } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/actions';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    outerBox: {
        borderRadius: '16px',
        backgroundColor: '#ffff',
        padding: theme.spacing(2)
    },
    image: {
        width: theme.spacing(20),
        objectFit: 'cover',
    },
    button: {
        borderRadius: '20px',
        boxShadow: "none",
    },
    meter: {
        padding: theme.spacing(1),
        borderRadius: '20px',
        margin: theme.spacing(2),
    }
}));

function ShopTile(props) {
    const classes = useStyles();
    const theme = useTheme();
    const person = props.person;
    const db = firebase.firestore();
    const [profit, setProfit] = useState(0);
    const [max, setMax] = useState(0);
    const [cost, setCost] = useState(5);
    const dispatch = useDispatch();

    const normalise = value => (value) * 100 / (max);

    db.collection("products").doc(`${person}`).get()
        .then(function (document) {
            setProfit(document.data().profit + document.data().venmo);
            setMax(document.data().max);
        });

    const handleAddToCart = (name, itemPrice) => {
        dispatch(addToCart(name, itemPrice));
    }

    const handleCost = (e) => {
        if (e.target.value <= 0) return <Alert severity="error">Please name a price greater than 0!</Alert>
        setCost(e.target.value);
    }
    
    return (
        /* // container for tile */
        <Box className={classes.outerBox}>
            <Grid container direction="column" alignItems="center" spacing={0.5}>
                { /* picture of item */ }
                <Grid item>
                    <img src={props.image} className={classes.image} alt={props.alt} />
                </Grid>

                { /* item name */ }
                <Grid item>
                    <Typography variant="h5">{props.name}</Typography>
                </Grid>

                { /* item description */}
                <Grid item>
                    <Typography variant="body2">{props.desc}</Typography>
                </Grid>

                { /* buttons */}
                <Grid item>
                    <TextField 
                    type="number"
                    size="small"
                    defaultValue="5" 
                    label="Name Your Own Price"
                    variant="outlined"
                    onChange = {e => handleCost(e)}
                    InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
                    style={{margin: theme.spacing(1)}}
                />
           
                    <Grid container spacing={1}>
                        <Grid item><Button className={classes.button} color="secondary" variant="contained">View Dares</Button></Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleAddToCart(props.name, cost)}
                                className={classes.button} color="primary"
                                variant="contained" href={props.link}>
                                Add To Cart
                            </Button>
                        </Grid>
                    </Grid>

                    <LinearProgress className={classes.meter} color="primary" variant="determinate" value={normalise(profit)} />
                    <Typography variant="body2">Dare Threshold: ${profit} / {max}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopTile;