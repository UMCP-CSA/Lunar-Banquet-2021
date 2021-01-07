import React from 'react'
import ShopTile from '../Components/Shop/ShopTile.jsx';
import { Grid, Container } from '@material-ui/core';

function ShopPage(props) {

    return (
        <Container>
            <Grid container>
                <Grid item>
                    <ShopTile
                        color="secondary"
                        name="Boba"
                        price="$5.00"
                        desc="Yummy"
                        image="https://www.vhv.rs/dpng/d/443-4438336_talk-boba-logo-logo-for-milk-tea-hd.png"
                    />
                </Grid>

                <Grid item>
                    <ShopTile
                        color="secondary"
                        name="Sticker"
                        price="$10000"
                        desc="Baby Milo"
                        image="https://i.pinimg.com/236x/0b/99/d6/0b99d6fdfc3b7381a1201242a89247e6--astronauts-sticker.jpg"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopPage;
