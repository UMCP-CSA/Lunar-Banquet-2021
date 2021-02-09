import React from 'react';
import { 
    Typography, 
    Box, 
    Paper, 
    useTheme, 
    Grid,
    makeStyles,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell
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
    },
    table: {
        minWidth: 300,
    },
}));

function createData(time, event) {
    return { time, event };
}

const rows = [
    createData('7:00', 'Event Starts'),
    createData('7:15', 'Game 1'),
    createData('7:30', 'Performance 1: GGWB'),
    createData('7:45', 'Game 2'),
    createData('8:00', 'Performance 2: Wushu'),
    createData('8:15', 'Game 3'),
    createData('8:30', 'Performance 3: Tianyi'),
    createData('8:45', 'End'),
];

function LoginPopup(props) {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                <Typography> Program of Events </Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell>Event</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.time}
                                    </TableCell>
                                    <TableCell >{row.event}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </Box>
    );
}

export default connect()(LoginPopup);