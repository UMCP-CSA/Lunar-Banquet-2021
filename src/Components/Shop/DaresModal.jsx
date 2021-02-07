import React from 'react';
import { Typography, Box, Paper, useTheme, Table, TableCell, TableRow, TableHead } from '@material-ui/core';
import { connect } from 'react-redux';

function DaresModal(props) {
    const theme = useTheme();

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                <Typography variant="body2">
                    Alex's Dares!
                </Typography>

                <Table > {/* size="small" */}
                    <TableHead>
                        <TableRow>
                            <TableCell>Dare</TableCell>
                            <TableCell>Price</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableRow>
                        <TableCell>Durian</TableCell>
                        <TableCell>$5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Pied or Egged</TableCell>
                        <TableCell>$15</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Eat Lemon</TableCell>
                        <TableCell>$25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Embarrasing Pic</TableCell>
                        <TableCell>$35</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Spicy Nood(le)s</TableCell>
                        <TableCell>$50</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Go Out in Public with Wig</TableCell>
                        <TableCell>$60</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Bleach Hair</TableCell>
                        <TableCell>$80</TableCell>
                    </TableRow>
                </Table>
            </Paper>
        </Box>
    );
}

export default connect()(DaresModal);