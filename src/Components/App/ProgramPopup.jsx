import React from 'react';
import { 
    Typography, 
    Box, 
    Paper, 
    useTheme, 
    Grid,
    makeStyles
} from '@material-ui/core';
import { connect } from 'react-redux';
import GGWB from '../../Assets/OrgPics/GGWB.jpg'
import Tianyi from '../../Assets/OrgPics/Tianyi.jpg'
import Wushu from '../../Assets/OrgPics/Wushu.jpg'

const useStyles = makeStyles((theme) => ({
    image: {
        width: theme.spacing(20),
        height: theme.spacing(20)
    },
    heading: {
        flexGrow: 1,
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b"
    }
}));

function LoginPopup(props) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                {/* <Typography variant="body2">
                    The program of events will be posted here as we get closer to the event!
                </Typography> */}
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.heading}> GGWB </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            GGWB is a dance group here at UMD. They got fancy moves :)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={GGWB} className = {classes.image} alt = ""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.heading}>Tianyi</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Tianyi is a traditional Chinese dance group at UMD. They also got fancy moves :)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={Tianyi} className = {classes.image} alt = ""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.heading}>Terp Wushu</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            Wushu is a Chinese martial arts group at UMD. They got fancy fighting moves :)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={Wushu} className = {classes.image} alt = ""/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" align="center" className={classes.heading}>Diabolo</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);