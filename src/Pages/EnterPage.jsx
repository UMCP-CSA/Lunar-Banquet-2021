import React from 'react';
import EnterImage from '../Assets/Enter/New Year Ox.svg';
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
            style={{ minHeight: '105vh' }}
        >

            <Grid item>
                {/* link to home */}
                <Link href='/'>
                    {/* use image for button */}
                    <img
                        style={{
                            width: '1200px',
                            height: '800px',
                            borderRadius: '25px',
                            boxShadow: '6px 8px #545454',
                        }}
                        src={EnterImage} 
                        alt='enter' 
                        link='/'
                    /><br />
                </Link>

                {/* freepik requires attribution unless we have a premium account */}
                <a style={{fontSize: '10px'}} href='https://www.freepik.com/vectors/new-year'>
                New year vector created by pikisuperstar - www.freepik.com
                </a>
            </Grid>
        </Grid>
    );
}
export default EnterPage;