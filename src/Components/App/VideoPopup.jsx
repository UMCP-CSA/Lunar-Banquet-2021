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
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <iframe
                            style={{
                                width: "1600px",
                                height: "900px",
                                // overflowY: "scroll", scroll currently disabled 
                            }}
                            title="lunar stream"
                            src="https://www.youtube.com/embed/zpD0k69QwRU"
                            frameborder="0"
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" allowfullscreen>
                        </iframe>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);