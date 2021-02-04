import React from 'react';
import { 
    Typography, 
    Box, 
    Paper, 
    useTheme, 
    Grid
} from '@material-ui/core';
import { connect } from 'react-redux';


function LoginPopup(props) {
    const theme = useTheme();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                {/* <Typography variant="body2">
                    The program of events will be posted here as we get closer to the event!
                </Typography> */}
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography>ggwb</Typography>
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
            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);