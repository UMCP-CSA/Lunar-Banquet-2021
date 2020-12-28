import React from 'react'
import { Typography } from '@material-ui/core';
import ShopTile from '../Components/ShopTile.jsx';

function ShopPage(props) {
    return (
        <div>
            <ShopTile
                color="Secondary"
                name="Boba"
                price="$5.00"
                desc="Yummy"
                image="https://www.vhv.rs/dpng/d/443-4438336_talk-boba-logo-logo-for-milk-tea-hd.png"
            />
        </div>
    )
}

export default ShopPage
