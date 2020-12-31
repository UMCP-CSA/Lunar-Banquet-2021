import React from 'react';
import { Button } from '@material-ui/core';

function HomePage(props) {
    return (
        // center button using style tag
        <div>
            <Button color='secondary' href='/enter'>Link to Enter</Button>
        </div>
    );
}
export default HomePage;