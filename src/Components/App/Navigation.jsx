import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    Typography,
    Button
} from '@material-ui/core';
import CSALogo from '../../Assets/Images/CSALogo.svg';
import { Link } from 'react-router-dom';
import MemberCard from "./MemberCard.jsx";
import Alex from '../../Assets/Images/Alex.jpg';
import Andrew from '../../Assets/Images/Andrew.jpg';
import Allison from '../../Assets/Images/Allison.jpg';
import Angena from '../../Assets/Images/Angena.jpg';
import Eugene from '../../Assets/Images/Eugene.jpg';
import Jen from '../../Assets/Images/Jen.jpg';
import Jessica from '../../Assets/Images/Jessica.jpg';
import Lily from '../../Assets/Images/Lily.jpg';
import Sylvia from '../../Assets/Images/Sylvia.jpg';
import Thea from '../../Assets/Images/Thea.jpg';

const useStyles = makeStyles(theme => ({
    logo: {
        paddingRight: theme.spacing(1),
        width: '3rem',
    },
    heading: {
        flexGrow: 1,
    }
}));

// logout = () => {

// }

function Navigation(props) {
    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <img src={CSALogo} className={classes.logo} alt='' />
                    <Typography align='left' variant='h6' color='secondary' className={classes.heading}>Lunar Banquet 2020</Typography>
                    {/* <Button color='inherit' onClick={logout()}>Log Out</Button> */}
                    <Button color='inherit'><Link to="/login">Login</Link></Button>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Typography varient="h5">Committee Members</Typography>

            <MemberCard
                name = "Andrew Liu"
                image = {Andrew}
                bio = "President"
            />

            <MemberCard
                name = "Allison Wei"
                image = {Allison}
                bio = "President"
            />

            <MemberCard
                name = "Thea Bliss"
                image = {Thea}
                bio = "Programming Lead"
            />

            <MemberCard
                name = "Lily Jin"
                image = {Lily}
                bio = "Marketing Lead"
            />
        </div>
    );
}

export default Navigation;