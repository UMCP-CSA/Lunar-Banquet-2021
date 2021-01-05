import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ShopTile from '../Components/Shop/ShopTile.jsx';
import TempBabyMilo from '../Assets/Images/ShopImages/TempBabyMilo.jpg';
import TempBoba from '../Assets/Images/ShopImages/TempBoba.png';
import TempSupreme from '../Assets/Images/ShopImages/TempSupreme.jpg';
import TempOVO from '../Assets/Images/ShopImages/TempOVO.jpg';
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    itemRow: {
        marginTop: '5%'
    }
}));

function ShopPage(props) {
    const classes = useStyles();
    
    return (
        <div>
            <Grid container className={classes.itemRow} direction="row" justify="space-evenly" alignItems="center">
                <Grid item>
                    <ShopTile
                        name="Boba"
                        price="$5.00"
                        desc="Yummy"
                        image={TempBoba}
                        alt="Boba cup"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Sticker"
                        price="$10000.00"
                        desc="Baby Milo"
                        image={TempBabyMilo}
                        alt="Astro Baby Milo"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Supreme Bag"
                        price="$400.00"
                        desc="Easy cop"
                        image={TempSupreme}
                        alt="Supreme bag"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="OVO Cards"
                        price="$22.00"
                        desc="Must have"
                        image={TempOVO}
                        alt="OVO Cards"
                        stock="In Stock"
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ShopPage;
