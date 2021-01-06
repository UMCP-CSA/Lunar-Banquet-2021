import React from 'react';
import {
    makeStyles,
    Grid,
    Container,
    Typography
} from '@material-ui/core';
import MemberCard from '../Components/App/MemberCard';
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

const useStyles = makeStyles(theme => ({

}));

function CommitteePage(props) {

    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h3" align="center">Committee Members</Typography>
            <Grid container>
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
                        //image={Sylvia}
                        bio="Activities Lead"
                    />
                </Grid>
                <Grid item>
                    <MemberCard
                        name="Alex Chui"
                        //image={Sylvia}
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
                        //image={Sylvia}
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
            </Grid>
        </Container>
    );

}

export default CommitteePage;