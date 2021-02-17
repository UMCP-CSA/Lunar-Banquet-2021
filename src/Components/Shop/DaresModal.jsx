import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box, Paper, Table, TableCell, TableRow, TableHead } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    tableHead: {
        fontWeight: "bold",
        fontFamily: "'Abril Fatface', cursive",
        color: "#ffd56b",
    },
}));

function DaresModal(props) {
    const theme = useTheme();

    const dares = [
        "Pied", "Eat a Lemon", "Eat Spicy Noodles", "Lots of Lipstick", "Blind Makeup", "Sing a Song", "Call a Random Contact", "Call Crush", "Get Bangs", "Get a Piercing", "Shave Head",
        "Eat Spicy Food", "Blind Makeup", "Recreate Entire Avatar Opening", "Call a Random Contact",
        "Pied", "Egged", "Eat Durian", "Eat a Lemon", "Eat Hot Noodles",
        "Eat Durian", "Pied + Egged", "Eat A Lemon", "Embarrasing Pic", "Spicy Nood(le)s", "Go Out in a Wig", "Bleach Hair",
        "Egg Self", "Sing a Song", "Eyebrow Slit", "Call Crush",
        "Sing a Song", "Lots of Lipstick", "Draw on Face", "Pied + Egged",
        "Eat Durian", "Do the Worm", "Lipsync", "Blindfold Food Challenge", "Pied", "Juggle Eggs", "Sauce Cocktail", "Slap on Face", "Livestream Scary Game", "Ice Bucket Challenge", "Attempt a Handstand", "Bittermelon Covered in Hot Sauce",
        "Pied", "Post Grade School Photo", "Eat Spicy Noodles", "Dance to TWICE"     
    ]
    
    const prices = [
        "$5", "$15", "$20", "$30", "$40", "$50", "$60", "$100", "$130", "$150", "$800",
        "$15", "$30", "$50", "$65",
        "$10", "$20", "$30", "$40", "$50",
        "$5", "$15", "$25", "$35", "$50", "$60", "$80",
        "$20", "$30", "$40", "$50",
        "$10", "$25", "$40", "$60",
        "$10", "$20", "$30", "$40", "$50", "$60", "$70", "$80", "$90", "$100", "$125", "$150",
        "$10", "$20", "$30", "$50"
    ]
    
    const data = [];
    
    const createData = (dare, price) => {
        return { dare, price };
    }
    
    var i;
    var start;
    var end;
    if (props.person === "jen") {  
        start = 0;
        end = 10;
    } else if (props.person === "lily") {  
        start = 11;
        end = 14;
    } else if (props.person === "alexc") {  
        start = 15;
        end = 19;
    } else if (props.person === "alexh") {  
        start = 20;
        end = 26;
    } else if (props.person === "eugene") {  
        start = 27;
        end = 30;
    } else if (props.person === "sylvia") {  
        start = 31;
        end = 34;
    } else if (props.person === "alice") {  
        start = 35;
        end = 46;
    } else if (props.person === "andrew") {  
        start = 47;
        end = 50;
    }

    for (i = start; i <= end; i++) {
        data.push(createData(dares[i], prices[i]));
    }

    var name;
    switch(props.person) {
        case "jen":
            name = "Jen";
            break;
        case "lily":
            name = "Lily";
            break;
        case "alexc":
             name = "Alex C";
             break;
        case "alexh":
            name = "Alex H";
            break;
        case "eugene":
            name = "Eugene";
            break;
        case "sylvia":
            name = "Sylvia";
            break;
        case "alice":
            name = "Alice";
            break;
        case "andrew":
            name = "Andrew";
            break;
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="column" style={{textAlign: "center"}}>
            <Paper elevation={1} style={{ padding: theme.spacing(5) }} ju>
                <Typography variant='h6' style={{fontWeight: "bold"}}>
                    {name}'s Dares!
                </Typography> 

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dare</TableCell>
                            <TableCell>Threshold</TableCell>
                        </TableRow>
                    </TableHead>

                    {data.map((row) => (
                        <TableRow>
                                <TableCell>{row.dare}</TableCell>
                                <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </Table>
            </Paper>
        </Box>
    );
}

export default connect()(DaresModal);