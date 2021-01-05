import React from 'react';
// import EnterButton from '../Components/Enter/EnterButton.jsx';
import DoorKnocker from '../Assets/Enter/Door Knocker.svg';
import { Grid, Link } from '@material-ui/core/';

function EnterPage(props) {
    return (
        // Grid to center button
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item>
                {/* link to home */}
                <Link href='/'>
                    {/* use image for button */}
                    <img
                        style={{
                            width: '800px',
                            height: '800px',
                        }}
                        src={DoorKnocker} 
                        alt='door knocker' 
                        link='/'
                    /><br />
                </Link>

                {/* website requires attribution unless we have a premium account */}
                <a style={{fontSize: '10px'}} href="http://www.freepik.com">
                    Designed by upklyak / Freepik
                </a>
            </Grid>
        </Grid>
    );
}
export default EnterPage;