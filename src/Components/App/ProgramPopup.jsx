import React from 'react';
import { Typography, Box, Paper, useTheme } from '@material-ui/core';
import { connect } from 'react-redux';



function LoginPopup(props) {
    const theme = useTheme();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                <Typography variant="body2">
                    The program of events will be posted here when we get closer to the event
                </Typography>
            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);