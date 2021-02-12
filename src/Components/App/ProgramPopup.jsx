import React from 'react';
import { 
    Typography, 
    Box, 
    Paper, 
    useTheme, 
    Grid,
    makeStyles,
} from '@material-ui/core';
import { connect } from 'react-redux';

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

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                <Typography variant="body2">
                {/* <Typography variant="body2">
                    The program of events will be posted here as we get closer to the event!
                </Typography>
                </Typography> */}
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography> ggwb </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>tianyi</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>wushu</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>diabolo</Typography>
                    </Grid>
                </Grid>
                </Typography>
            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);