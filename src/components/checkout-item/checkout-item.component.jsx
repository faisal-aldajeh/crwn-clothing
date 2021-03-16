import React from 'react';
import { concatenateToResponse } from 'workbox-streams';
import "./checkout-item.styles.scss";

const CheckoutItem  =  ({cartItem: {name,price, imageUrl, quantity}}) => {

    return (
        <div className = 'checkout-item'>
            <div class = 'image-container'>
                <img src={imageUrl} alt="itme"/>
            </div>

            <span className = 'name'>{name}</span>
            <span className = 'quantity'>
                <span>
                    &#10092;
                </span>

                {quantity}

                <span>
                    &#10093;
                </span>
            </span>
            <span className = 'price'>{price}</span>   
            <div className = 'remove-button'> &#10005; </div>
            
        </div>
)}

export default CheckoutItem;