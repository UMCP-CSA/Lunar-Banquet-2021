import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.auth = firebase.auth();
    }

    // Email and Password Auth
    signUpWithEmailAndPassword = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    signInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                //Implement some kind of redirect
            })
            .catch((error) => {
                // Handle incorrect credentials
            });
    }

    signOut = () => {
        this.auth.signOut();
    }

}

export default Firebase;

