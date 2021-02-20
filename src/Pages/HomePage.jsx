import React from 'react';
import Cow from '../Assets/Homepage/Cow.svg';
import Lantern from '../Assets/Homepage/Lantern.svg';
import Flower from '../Assets/Homepage/Flower1.svg';
import Cloud from '../Assets/Homepage/Cloud.svg';
import { Container, makeStyles, useTheme } from '@material-ui/core';
import { Reveal, Tween } from 'react-gsap';
import '../App.css'

const useStyles = makeStyles(theme => ({
    lantern1: {
        position: "absolute",
        top: theme.spacing(0),
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(7),
            left: theme.spacing(3)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(15),
            left: theme.spacing(10)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(18),
            left: theme.spacing(10)
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(13),
            left: theme.spacing(40),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(18),
            left: theme.spacing(15),
        }
    },
    lantern2: {
        top: theme.spacing(0),
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(6),
            left: theme.spacing(35)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(14),
            left: theme.spacing(75)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(15),
            left: theme.spacing(95),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(15),
            left: theme.spacing(153),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(17),
            left: theme.spacing(200),
        }
    },
    cow: {
        position: "absolute",
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(30),
            top: theme.spacing(25),
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(60),
            top: theme.spacing(46),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(70),
            top: theme.spacing(35),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(15),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(60),
            top: theme.spacing(20),
        }
    },
    cloud1: {
        position: "absolute",
        left: theme.spacing(-4),
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(20),
            top: theme.spacing(60),
            overflow: 'hidden'
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(30),
            top: theme.spacing(45),
            overflow: 'hidden'
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(35),
            top: theme.spacing(55),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(40),
            top: theme.spacing(35),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(45),
            top: theme.spacing(55),
        }
    },
    cloud2: {
        position: "absolute",
        right: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(17),
            top: theme.spacing(18),
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(30),
            top: theme.spacing(120),
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(35),
            top: theme.spacing(100),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(50),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(50),
            top: theme.spacing(80),
        }
    },
    flower1: {
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(5),
            top: theme.spacing(20),
            left: theme.spacing(5)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
            top: theme.spacing(35),
            left: theme.spacing(25)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(12),
            top: theme.spacing(20),
            left: theme.spacing(30),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(16),
            top: theme.spacing(20),
            left: theme.spacing(130),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(17),
            top: theme.spacing(20),
            left: theme.spacing(55),
        }
    },
    flower2: {
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(5),
            top: theme.spacing(60),
            left: theme.spacing(35)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
            top: theme.spacing(100),
            left: theme.spacing(85)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(13),
            top: theme.spacing(75),
            left: theme.spacing(105),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(15),
            top: theme.spacing(60),
            left: theme.spacing(35),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(17),
            top: theme.spacing(70),
            left: theme.spacing(170),
        },
    },
}));

const SlideFromLeft = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      duration={1.5}
      ease="back.out(1.2)"
    >
      {children}
    </Tween>
  );

const SlideFromRight = ({ children }) => (
    <Tween
      from={{ opacity: 0, transform: 'translate3d(100vw, 0, 0)' }}
      duration={1.5}
      ease="back.out(1.2)"
    >
      {children}
    </Tween>
  );

const SlideFromTop = ({ children }) => (
<Tween
    from={{ opacity: 0, transform: 'translate3d(0, -100vh, 0)' }}
    duration={1.5}
    ease="back.out(1.0)"
>
    {children}
</Tween>
);

const FadeSpinIn = ({ children }) => (
<Tween
    from={{ opacity: 0 }}
    to={{ opacity: 1, rotation: 360 }}
    duration={1.5}
>
    {children}
</Tween>
);

function HomePage(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Container fixed>
            <Reveal repeat trigger={<div />}>
                <SlideFromTop>
                    <img
                        className={classes.lantern1}
                        alt="lantern"
                        src={Lantern} 
                    />
                </SlideFromTop>
            </Reveal>
            

            <Reveal repeat trigger={<div />}>
                <SlideFromTop>
                    <img
                        className={classes.lantern2}
                        alt="lantern"
                        src={Lantern} 
                    />
                </SlideFromTop>
            </Reveal>

            <Reveal repeat trigger={<div />}>
                <Tween from={{ opacity: 0 }} duration={3}>
                    <img 
                        className={classes.cow}
                        alt="cow"
                        src={Cow} 
                    />
                </Tween>
            </Reveal>
            
            <Reveal repeat trigger={<div />}>
                <FadeSpinIn>
                    <img
                        className={classes.flower1}
                        alt="flower"
                        src={Flower} 
                    />
                </FadeSpinIn>
            </Reveal>
            
            <Reveal repeat trigger={<div />}>
                <FadeSpinIn>
                    <img
                        className={classes.flower2}
                        alt="flower"
                        src={Flower} 
                    />
                </FadeSpinIn>
            </Reveal>
            
            <Reveal repeat trigger={<div />}>
                <SlideFromLeft>
                    <img
                        className={classes.cloud1}
                        alt="cloud"
                        src={Cloud}
                    />
                </SlideFromLeft>
            </Reveal>
            
            <Reveal repeat trigger={<div />}>
                <SlideFromRight>
                    <img
                        className={classes.cloud2}
                        alt="cloud"
                        src={Cloud} 
                    />
                </SlideFromRight>
            </Reveal>
        </Container>
    );
}
export default HomePage;