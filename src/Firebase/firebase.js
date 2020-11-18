import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
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

    // Google Auth
    signInWithGoogle = () => {
        this.auth.signInWithPopup(this.provider)
        .then((user) => {
            // Implement later
        })
    }

    signOut = () => {
        this.auth.signOut();
    }

}

export default Firebase;

