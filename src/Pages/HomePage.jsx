import React from 'react';
import Cow from '../Assets/Homepage/Cow.svg';
import Lantern from '../Assets/Homepage/Lantern.svg'
import Flower1 from '../Assets/Homepage/Flower1.svg'
import Cloud from '../Assets/Homepage/Cloud.svg'
import { Container, useTheme } from '@material-ui/core';
import EnterImage from '../Assets/Homepage/New Year Ox.svg';
import EnterButton from '../Components/Enter/EnterButton.jsx';

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
                alt="lantern"
                src={Lantern} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(12),
                    top: theme.spacing(0),
                    left: theme.spacing(160),
                    zIndex: 0
                }}
                alt="lantern"
                src={Lantern} />
            <img 
                style={{ 
                    position: "absolute",
                    width: theme.spacing(70),
                    height: theme.spacing(50),
                    top: theme.spacing(80),
                    left: "35vw"
                }}
                alt="cow"
                src={Cow} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(10),
                    top: theme.spacing(26),
                    left: theme.spacing(30)
                }}
                alt="flower"
                src={Flower1} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(7),
                    top: theme.spacing(75),
                    left: theme.spacing(140)
                }}
                alt="flower"
                src={Flower1} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(37),
                    top: theme.spacing(60),
                    left: theme.spacing(15)
                }}
                alt="cloud"
                src={Cloud} />
            <img
                style={{
                    position: "absolute",
                    width: theme.spacing(50),
                    top: theme.spacing(40),
                    left: theme.spacing(150)
                }}
                alt="cloud"
                src={Cloud} />

            <EnterButton
                img={EnterImage} 
                alt='enter' 
                link='/' 
                width='800px' 
                height='533px' />
        </Container>
    );
}
export default HomePage;