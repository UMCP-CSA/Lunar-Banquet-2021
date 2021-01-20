import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


function PayPalButton(props) {
    
    const [{ isPending }] = usePayPalScriptReducer();

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: props.amount
                    },
                },
            ],
        });
    }

    return (
        <>
            {isPending ? <div className="spinner" style={{ layout: "horizontal" }} /> : null}
            <PayPalButtons createOrder={(data, actions) => createOrder(data, actions)} />
        </>
    );
}

export default PayPalButton;