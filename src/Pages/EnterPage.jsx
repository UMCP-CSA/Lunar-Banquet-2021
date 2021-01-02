import React from 'react';
import EnterButton from '../Components/Enter/EnterButton.jsx';
import { Grid } from '@material-ui/core/';

function EnterPage(props) {
    return (
        // Container to hold button
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item>
                <EnterButton text='Enter' link='/' />
            </Grid>
            
        </Grid>
        
    );
}
export default EnterPage;