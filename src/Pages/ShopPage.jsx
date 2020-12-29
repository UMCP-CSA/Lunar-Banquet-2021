import React from 'react'
import ShopTile from '../Components/Shop/ShopTile.jsx';
import TempBabyMilo from '../Assets/Images/ShopImages/TempBabyMilo.jpg';
import TempBoba from '../Assets/Images/ShopImages/TempBoba.png';

function ShopPage(props) {
    return (
        <div>
            <ShopTile
                color="secondary"
                name="Boba"
                price="$5.00"
                desc="Yummy"
                image={TempBoba}
                alt="Boba cup"
            />
            <ShopTile
                color="secondary"
                name="Sticker"
                price="$10000"
                desc="Baby Milo"
                image={TempBabyMilo}
                alt="Astro Baby Milo"
            />
        </div>
    )
}

export default ShopPage;
