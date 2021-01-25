import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import firebase from 'firebase';

function PayPal(props) {

    const user = firebase.auth().currentUser;
    console.log(user);
    const db = firebase.firestore();

    return (
        <>
            <PayPalButton 
                amount={props.amount}
                onSuccess={(details, data) => {
                    const payload = {
                        name: user.displayName,
                        email: user.email
                    }
                    // Need to write items to database after it's hooked up to the cart
                    db.collection('purchase').doc(user.displayName).set(payload);
                }}
                style={{color: "silver"}}
                options={{
                    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
                }}
            />
        </>
    );
}
export default PayPal;