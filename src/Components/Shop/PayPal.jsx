import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

function PayPal(props) {

    return (
        <>
            <PayPalButton 
                amount={props.amount}
                onSuccess={(details, data) => {
                    // Write to firebase
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