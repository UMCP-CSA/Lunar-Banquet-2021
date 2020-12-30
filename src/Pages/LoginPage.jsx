import React from 'react';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { Typography, Box } from '@material-ui/core';

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
};

function LoginPage(props) {
    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            <Typography variant="body2">
                If you're not an existing user, an account will be made once you enter an email or login with your Google account!
            </Typography>
        </Box>
    );
}

export default LoginPage;