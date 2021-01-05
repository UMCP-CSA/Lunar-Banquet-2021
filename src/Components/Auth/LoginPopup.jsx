import React, { useEffect } from 'react';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Typography, Box, Paper, useTheme } from '@material-ui/core';

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
        signInSuccessWithAuthResult: () => true
    }
};

function LoginPopup(props) {
    const theme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
       firebase.auth().onAuthStateChanged(user => {
            if (user) dispatch(login());
            console.log(user);
        });
    }, [dispatch]);

    return (
        <Box display="flex" alignItems="center" flexDirection="column">
            <Paper elevation={1} style={{ padding: theme.spacing(5) }}>
                <Typography variant="body2">
                    If you want to create an account, both login methods will automatically detect if you are a new user!
                </Typography>
                <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Paper>
        </Box>
    );
}

export default LoginPopup;