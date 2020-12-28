import React from 'react';
import firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';

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
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    );
}

export default LoginPage;