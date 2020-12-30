import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import ShopTile from '../Components/Shop/ShopTile.jsx';
import TempBabyMilo from '../Assets/Images/ShopImages/TempBabyMilo.jpg';
import TempBoba from '../Assets/Images/ShopImages/TempBoba.png';
import TempSupreme from '../Assets/Images/ShopImages/TempSupreme.jpg';
import TempOVO from '../Assets/Images/ShopImages/TempOVO.jpg';

const useStyles = makeStyles((theme) => ({
    itemRow: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0
    }
}));

function ShopPage(props) {
    const classes = useStyles();
    
    return (
        <div>
            <li className={classes.itemRow}>
                <ShopTile
                    name="Boba"
                    price="$5.00"
                    desc="Yummy"
                    image={TempBoba}
                    alt="Boba cup"
                />
                <ShopTile
                    name="Sticker"
                    price="$10000.00"
                    desc="Baby Milo"
                    image={TempBabyMilo}
                    alt="Astro Baby Milo"
                />
                <ShopTile
                    name="Supreme Bag"
                    price="$400.00"
                    desc="Easy cop"
                    image={TempSupreme}
                    alt="Supreme bag"
                />
                <ShopTile
                    name="OVO Cards"
                    price="$22.00"
                    desc="Must have"
                    image={TempOVO}
                    alt="OVO Cards"
                />
            </li>
        </div>
    )
}

export default ShopPage;
