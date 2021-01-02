import React from 'react';
import { Button } from '@material-ui/core';

function EnterPage(props) {
    return (
        // center button using style tag
        <div>
            <Button size="large" variant="contained" color="primary" href="/">Enter</Button>
        </div>
    );
}
export default EnterPage;