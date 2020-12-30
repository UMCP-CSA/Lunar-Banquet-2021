import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    video: {
        margin: theme.spacing(5),
    }
}));

function ShopPage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.video}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zpD0k69QwRU"
                frameborder="0"
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" allowfullscreen>
            </iframe>
        </Container>
    );
}

export default ShopPage;