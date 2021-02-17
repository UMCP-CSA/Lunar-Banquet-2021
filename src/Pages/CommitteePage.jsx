import React from 'react';
import {
    makeStyles,
    Grid,
    Container,
    Typography
} from '@material-ui/core';
import MemberCard from '../Components/Committee/MemberCard';
import Andrew from '../Assets/OrgPics/Andrew.jpg';
import Allison from '../Assets/OrgPics/Allison.jpg';
import Thea from '../Assets/OrgPics/Thea.jpg';
import Lily from '../Assets/OrgPics/Lily.jpg';
import Eugene from '../Assets/OrgPics/Eugene.jpg';
import Angena from '../Assets/OrgPics/Angena.jpg';
import Sylvia from '../Assets/OrgPics/Sylvia.jpg';
import Jen from '../Assets/OrgPics/Jen.jpg';
import Alex from '../Assets/OrgPics/Alex.jpg';
import Jessica from '../Assets/OrgPics/Jessica.jpg';
import Alan from '../Assets/OrgPics/Alan.jpg';
import Catherine from '../Assets/OrgPics/catherine.jpg';
import Daphne from '../Assets/OrgPics/daphne.jpg';
import Joann from '../Assets/OrgPics/joann.jpg';
import Julie from '../Assets/OrgPics/julie.JPG';
import Kyle from '../Assets/OrgPics/kyle.jpg';
import Mei from '../Assets/OrgPics/mei.jpg';
import Stanley from '../Assets/OrgPics/Stanley.jpg';
import Bonnie from '../Assets/OrgPics/bonnie.jpg';
import Nick from '../Assets/OrgPics/nick.jpg';
import Thomas from '../Assets/OrgPics/thomas.jpg';
import AlexC from '../Assets/OrgPics/alexc.png';
import Unavailable from '../Assets/OrgPics/unavailable.jpg';
import Brittany from '../Assets/OrgPics/Brittany.jpg';
import Helen from '../Assets/OrgPics/unavailable.jpg';
import Alice from '../Assets/OrgPics/unavailable.jpg';

const useStyles = makeStyles(theme => ({
    heading: {
        flexGrow: 1,
        fontFamily: "'Open Sans', sans-serif",
        fontWeight: 'bold',
        color: "#ffd56b",
        marginBottom: theme.spacing(5),
    }
}));

function CommitteePage(props) {

    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h3" align="center" className={classes.heading}>COMMITTEE MEMBERS</Typography>
            <Grid container container direction="row" justify="center" spacing={5}>
                <Grid item>
                    <MemberCard
                        name="Andrew Liu"
                        image={Andrew}
                        bio="President"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Allison Wei"
                        image={Allison}
                        bio="President"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Thea Bliss"
                        image={Thea}
                        bio="Programming Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Lily Jin"
                        image={Lily}
                        bio="Marketing Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Eugene Liu"
                        image={Eugene}
                        bio="Marketing Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Angena Chen"
                        image={Angena}
                        bio="Activities Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Sylvia Yee"
                        image={Sylvia}
                        bio="Activities Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Bonnie McMillian"
                        image={Bonnie}
                        bio="Activities Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Alex Chui"
                        image={AlexC}
                        bio="Fundraising Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Jen Varghese"
                        image={Jen}
                        bio="Fundraising Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Alex Heng"
                        image={Alex}
                        bio="Tech Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Mei Lu"
                        image={Mei}
                        bio="Tech Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Jessica Lou"
                        image={Jessica}
                        bio="Video Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Kyle Chiu"
                        image={Kyle}
                        bio="Programming Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Chris Tan"
                        image={Unavailable}
                        bio="Programming Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Joann Wu"
                        image={Joann}
                        bio="Marketing Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Brittany Zhang"
                        image={Brittany}
                        bio="Marketing Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Catherine Chua"
                        image={Catherine}
                        bio="Activities Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Julie Yang"
                        image={Julie}
                        bio="Activities Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Daphne Ranti"
                        image={Daphne}
                        bio="Fundraising Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Alan Zhang"
                        image={Alan}
                        bio="Fundraising Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Nick Zhou"
                        image={Nick}
                        bio="Tech Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Thomas Szymkiewicz"
                        image={Thomas}
                        bio="Tech Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Stanley Zhu"
                        image={Stanley}
                        bio="Tech Committee"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Helen Zhang"
                        image={Helen}
                        bio="Senior Advisor"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Alice Wei"
                        image={Alice}
                        bio="Senior Advisor"
                    />
                </Grid>
            </Grid>
        </Container>
    );

}

export default CommitteePage;