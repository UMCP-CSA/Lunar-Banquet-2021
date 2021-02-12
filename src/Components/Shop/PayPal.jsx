import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import firebase from 'firebase';

function PayPal(props) {

    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const cart = props.cart
    console.log(cart);

    return (
        <>
            <PayPalButton 
                amount={props.amount}
                onSuccess={(details, data) => {
                    const payload = {
                        name: user.displayName,
                        email: user.email
                    }
                    cart.map((item) => {
                        db.collection("products").doc((item.name).toLowerCase()).get().then(function (document) {
                            const newProfit = parseFloat(document.data().profit) + parseFloat(item.cost)
                            console.log(db.collection('products').doc((item.name).toLowerCase()))
                            db.collection('products').doc((item.name).toLowerCase()).update({profit: newProfit});
                        })
                    })
                    
                }}
                style={{color: "silver", size: "responsive"}}
                options={{
                    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
                }}
            />
        </>
    );
}
export default PayPal;