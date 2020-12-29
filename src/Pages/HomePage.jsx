import React from 'react';
import Cow from '../Assets/Homepage/Cow.svg';
import Lantern from '../Assets/Homepage/Lantern.svg'
import Flower1 from '../Assets/Homepage/Flower1.svg'
import Cloud from '../Assets/Homepage/Cloud.svg'
import { Container, useTheme, Button } from '@material-ui/core';

function HomePage(props) {
    const theme = useTheme();

    return (
        <Container fixed>
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(15),
                    top: theme.spacing(0),
                    left: theme.spacing(5)
                }}
                src={Lantern} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(12),
                    top: theme.spacing(0),
                    left: theme.spacing(160)
                }}
                src={Lantern} />
            <img 
                style={{ 
                    position: "absolute",
                    width: theme.spacing(60),
                    top: theme.spacing(18),
                    left: "35vw"
                }}
                src={Cow} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(10),
                    top: theme.spacing(26),
                    left: theme.spacing(30)
                }}
                src={Flower1} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(7),
                    top: theme.spacing(75),
                    left: theme.spacing(140)
                }}
                src={Flower1} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(37),
                    top: theme.spacing(60),
                    left: theme.spacing(15)
                }}
                src={Cloud} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(50),
                    top: theme.spacing(40),
                    left: theme.spacing(150)
                }}
                src={Cloud} />
        </Container>
    );
}
export default HomePage;