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
                name1 = "Andrew Liu"
                image1 = {Andrew}
                bio1 = "President"
                name2 = "Allison Wei"
                image2 = {Allison}
                bio2 = "President"
                name3 = "Thea Bliss"
                image3 = {Thea}
                bio3 = "Programming Lead"
                name4 = "Lily Jin"
                image4 = {Lily}
                bio4 = "Marketing Lead"
            />

            <MemberCard
                name1 = "Eugene Liu"
                image1 = {Eugene}
                bio1 = "Marketing Lead"
                name2 = "Angena Chen"
                image2 = {Angena}
                bio2 = "Activities Lead"
                name3 = "Sylvia Yee"
                image3 = {Sylvia}
                bio3 = "Activities Lead"
                name4 = "Bonnie McMillian"

                bio4 = "Activities Lead"
            />

            <MemberCard
                name1 = "Alex Chui"

                bio1 = "Fundraising Lead"
                name2 = "Jen Varghese"
                image2 = {Jen}
                bio2 = "Funraising Lead"
                name3 = "Alex Heng"
                image3 = {Alex}
                bio3 = "Tech Lead"
                name4 = "Mei Lu"

                bio4 = "Tech Lead"
            />

            <MemberCard
                name1 = "Jessica Lou"
                image1 = {Jessica}
                bio1 = "Video Lead"
                name2 = "Kyle Chiu"
                
                bio2 = "Programming Committee"
                name3 = "Chris Tan"
                
                bio3 = "Programming Committee"
                name4 = "Joann Wu"
                
                bio4 = "Marketing Committee"
            />

            <MemberCard
                name1 = "Brittany Zhang"
                
                bio1 = "Marketing Committee"
                name2 = "Catherine Chua"
                
                bio2 = "Activities Committee"
                name3 = "Julie Yang"
                
                bio3 = "Activities Committee"
                name4 = "Daphne Ranti"
                
                bio4 = "Fundraising Committee"
            />

            <MemberCard
                name1 = "Alan Zhang"
                
                bio1 = "Fundraising Committee"
                name2 = "Nick Zhou"
                
                bio2 = "Tech Committee"
                name3 = "Thomas Szymkiewicz"
                
                bio3 = "Tech Committee"
                name4 = "Stanley Zhu"
                
                bio4 = "Tech Committee"
            />


        </div>
    );
}

export default Navigation;