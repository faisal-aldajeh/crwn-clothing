import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IYQzGKv9NnI1wQImCGsLeAjSk1TyvliW457JjyO6o5ZnUkv1GubLnYc8vP8rweQwivJjt2R1pw6jIoxjiUdhkEy004IUAl9uu";

    const onToken = token => {
        axios({
            url    : 'payment',
            method : 'post',
            data   : {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful')
        }).catch(error => {
            console.log("Payment Error");
            console.log(JSON.parse(error));
            console.log("Payment Error");
            alert(
                'There was an issue with your payment. Please make sure the provided credit cart'
            );
        });
        
    }

    return (
        <StripeCheckout
           label           = "Pay Now"
           name            = 'CRWN Clothing LTD.'
           billingAddress
           shippingAddress
           image           = 'https://svgshare.com/i/CUz.svg'
           description     = { `Your total is $${price}` }
           amount          = { priceForStripe }
           panelLabel      = 'Pay Now'
           token           = { onToken }
           stripeKey       = { publishableKey }

        />
    );

}

export default StripeCheckoutButton;