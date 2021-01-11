import React from 'react';
import Cow from '../Assets/Homepage/Cow.svg';
import Lantern from '../Assets/Homepage/Lantern.svg'
import Flower from '../Assets/Homepage/Flower1.svg'
import Cloud from '../Assets/Homepage/Cloud.svg'
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    lantern1: {
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(7),
            top: theme.spacing(0),
            left: theme.spacing(3)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
            top: theme.spacing(0),
            left: theme.spacing(10)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
    lantern2: {
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(8),
            top: theme.spacing(-3),
            left: theme.spacing(40)
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(5),
            top: theme.spacing(0),
            left: theme.spacing(10)
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
    cow: {
        position: "absolute",
        [theme.breakpoints.up('xs')]: {
            width: theme.spacing(37),
            top: theme.spacing(26),
            left: '50%',
            transform: 'translateX(-50%)'
        },
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(50),
            top: theme.spacing(30),
            left: '50%',
            transform: 'translateX(-50%)'
        },
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(68),
            top: theme.spacing(25),
            left: '50%',
            transform: 'translateX(-50%)'
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.spacing(68),
            top: theme.spacing(20),
            left: '50%',
            transform: 'translateX(-50%)'
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing(90),
            top: theme.spacing(20),
            left: '50%',
            transform: 'translateX(-50%)'
        }
    },
    cloud1: {
        position: "absolute",
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(18),
            top: theme.spacing(70),
            left: theme.spacing(-4),
            overflow: 'hidden'
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.down('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(20),
            left: theme.spacing(130),
        },
        [theme.breakpoints.down('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
    cloud2: {
        position: "absolute",
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(15),
            top: theme.spacing(18),
            right: theme.spacing(0)
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.down('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(20),
            left: theme.spacing(130),
        },
        [theme.breakpoints.down('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
    flower1: {
        position: "absolute",
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(5),
            top: theme.spacing(20),
            left: theme.spacing(10)
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.down('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(20),
            left: theme.spacing(130),
        },
        [theme.breakpoints.down('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
    flower2: {
        position: "absolute",
        [theme.breakpoints.down('sm')]: {
            
            width: theme.spacing(5),
            top: theme.spacing(70),
            left: theme.spacing(35)
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        },
        [theme.breakpoints.down('lg')]: {
            width: theme.spacing(50),
            top: theme.spacing(20),
            left: theme.spacing(130),
        },
        [theme.breakpoints.down('xl')]: {
            width: theme.spacing(10),
            top: theme.spacing(0),
            left: theme.spacing(15),
        }
    },
}));

function HomePage(props) {
    const classes = useStyles();

    return (
        <Container fixed>
            <img
                className={classes.lantern1}
                alt="lantern"
                src={Lantern} />
            <img
                className={classes.lantern2}
                alt="lantern"
                src={Lantern} />
            <img 
                className={classes.cow}
                alt="cow"
                src={Cow} />
            <img
                className={classes.flower1}
                alt="flower"
                src={Flower} />
            <img
                className={classes.flower2}
                alt="flower"
                src={Flower} />
            <img
                className={classes.cloud1}
                alt="cloud"
                src={Cloud} />
            <img
                className={classes.cloud2}
                alt="cloud"
                src={Cloud} />
        </Container>
    );
}
export default HomePage;