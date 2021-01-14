import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core';
import CountdownTimer from '../Components/Stream/CountdownTimer.jsx';

const useStyles = makeStyles((theme) => ({
    video: {
        margin: theme.spacing(5),
    }
}));

function ShopPage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.video}>
            {/* container to center video */}
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <CountdownTimer />
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