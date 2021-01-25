import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ShopTile from '../Components/Shop/ShopTile.jsx';
import Lily from '../Assets/OrgPics/Lily.jpg';
import Eugene from '../Assets/OrgPics/Eugene.jpg';
import Jen from '../Assets/OrgPics/Jen.jpg';
import AlexH from '../Assets/ShopPics/AlexH.jpg';
import { Grid, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

function ShopPage(props) {
    const classes = useStyles();

    return (
        <Box>
            <Grid container direction="row" spacing={2} >
                <Grid item>
                    <ShopTile
                        name="Lily"
                        profit="0"
                        desc="Yummy"
                        image={Lily}
                        alt="Boba cup"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Eugene"
                        profit="0"
                        desc="dare me for thicc red pocket"
                        image={Eugene}
                        alt="Astro Baby Milo"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Jen"
                        profit="0"
                        desc="Easy cop"
                        image={Jen}
                        alt="Supreme bag"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Lil Alex"
                        profit="0"
                        desc="The things I do for CSA"
                        image={AlexH}
                        alt="OVO Cards"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Big Alex"
                        profit="0"
                        desc="Must have"
                        image={Jen}
                        alt="OVO Cards"
                        stock="In Stock"
                    />
                </Grid>
                <Grid item>
                    <ShopTile
                        name="Sylvia"
                        profit="0"
                        desc="Must have"
                        image={Jen}
                        alt="OVO Cards"
                        stock="In Stock"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ShopPage;