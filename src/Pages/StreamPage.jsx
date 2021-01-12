import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    video: {
        margin: theme.spacing(5),
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b"
    }
}));

function ShopPage(props) {
    const classes = useStyles();

    return (
        // TODO: coundown above video, Banquet is February 20, 2021
        
        <Container className={classes.video}>


            {/* container to center video */}
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Typography variant="h3" align="center" className={classes.heading}>Lunar Banquet Will Be On February 20th, 2021</Typography>
                </Grid>
                {/* iframe as grid item */}
                <Grid item>
                    <iframe
                        style={{
                            width: "1600px",
                            height: "900px",
                            // overflowY: "scroll", scroll currently disabled 
                        }}
                        title="lunar stream"
                        src="https://www.youtube.com/embed/zpD0k69QwRU"
                        frameborder="0"
                        allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" allowfullscreen>
                    </iframe>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ShopPage;